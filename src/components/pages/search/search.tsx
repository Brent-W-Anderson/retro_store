
// ***CRITICAL*** move RAWG API request to .php, so we can hide API key from the client.
// We can accomplish this by sending the state information to .php through an action, so we know which data and page to fetch from the backend.
// set a cookie in .php, so the information is available for the frontend to display on request.

import React from 'react';
import { Component } from 'react';
import { Search, ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material';

// components
import GamesParallax from '../../gamesParallax/gamesParallax';

export default class SearchPage extends Component<{ offsetY:number, scrolling:boolean }> {
  state = {
    games: [],
    count: 0,
    searchVal: '',
    searchChanged: false,
    pageNum: 1
  }

  formAction = React.createRef<HTMLFormElement>();
  formActionPrevious = React.createRef<HTMLFormElement>();
  formActionNext = React.createRef<HTMLFormElement>();
  iframeData = React.createRef<HTMLIFrameElement>();

  checkData = () => {
    const searchData = this.iframeData.current?.contentWindow?.document.getElementById( 'search_data' );

    if( searchData?.textContent && searchData.textContent !== '' ) {
      const txt = searchData.textContent; // convert to plain text to get rid of the crappy html that got carried over.
      const txtString = String( txt ); // convert back to a normal string without the bs.
      let txtJson;

      try {
        txtJson = JSON.parse( txtString ); // break it into JSON.
      }
      catch( e ) {
        return true;
      }

      if( txtJson.results ) {
        searchData.innerHTML = ''; // reset data that was passed back to empty.
        this.setState({ 
          games: txtJson.results, // put the results into state.
          count: txtJson.count
        });

        console.warn( txtJson );
  
        return true;
      }
    }

    return false;
  }

  updateSearchVal = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    this.setState({ searchVal: e.target.value, searchChanged: true });
  }

  // TODO: create drop-down search filter, so we could search by: games, genere, etc..
  search = async ( e:React.KeyboardEvent<HTMLInputElement> ) => {
    const { searchVal, searchChanged } = this.state;

    if( e.key === 'Enter' && searchVal.length >= 3 ) {
      if( searchChanged ) this.setState({ pageNum: 1, searchChanged: false }); // reset page to 1 if the search was changed
      // instead of going to RAWG, let's use an action to send searchVal and pageNum -> search.php
      this.formAction.current?.submit();
      this.dataSearch();
    }
  }

  dataSearch = () => {
    const dataSearch = setInterval( () => { // keep checking the DOM every .5s until we have our data
      if( this.checkData() ) clearInterval( dataSearch ); // if we receive some data, stop checking for data
    }, 250 );
  }

  paginateRight = () => {
    this.setState({ pageNum: this.state.pageNum + 1, games: [] });
    this.formActionNext.current?.submit();
    this.dataSearch();
  }

  nextForm = () => {
    const { searchVal, pageNum } = this.state;

    return (
      <form
        ref={ this.formActionNext } 
        method='POST'
        action='./PHP/search.php'
        target='search_iframe'
        style={{ display: 'none' }}
      >
        <input type='text' name='searchInput' value={ searchVal } readOnly />
        <input name='pageNum' type='hidden' value={ pageNum + 1 } readOnly />
      </form>
    );
  }

  paginateLeft = () => {
    const { pageNum } = this.state;

    if( pageNum > 1 ) {
      this.setState({ pageNum: pageNum - 1, games: [] });
      this.formActionPrevious.current?.submit();
      this.dataSearch();
    }
  }

  previousForm = () => {
    const { searchVal, pageNum } = this.state;

    return (
      <form
        ref={ this.formActionPrevious } 
        method='POST'
        action='./PHP/search.php'
        target='search_iframe'
        style={{ display: 'none' }}
      >
        <input type='text' name='searchInput' value={ searchVal } readOnly />
        <input name='pageNum' type='hidden' value={ pageNum - 1 } readOnly />
      </form>
    );
  }

  currentCount = () => {
    const { games, count, pageNum } = this.state;

    if( games.length < 20 ) {
      return count;
    }
    else {
      return games.length * pageNum;
    }
  }

  loadPageCount = () => {
    const { games, count } = this.state;

    if( games.length === 0 ) { // let the user know we're loading data in.
      return '..Loading';
    }
    else {
      return (
        <span>
          { this.currentCount() }
          <br /><hr />
          { count }
        </span>
      );
    }
  }

  render() {
    const { games, searchVal, pageNum, count } = this.state;
    const { offsetY, scrolling } = this.props;

    return (
      <>
        <div id='search' className="page">
          <form
            ref={ this.formAction } 
            method='POST'
            action='./PHP/search.php'
            target='search_iframe'
          >
            <input
              type='text'
              placeholder='Search RAWGs game library..'
              name='searchInput'
              pattern='.{3,}'
              title='3 characters minimum..'
              value={ searchVal }
              onChange={ this.updateSearchVal }
              onKeyDown={ this.search }
              required
            />

            <input name='pageNum' type='hidden' value={ pageNum } readOnly />
          </form>

          { this.previousForm() }
          { this.nextForm() }

          <div className='search_icons'>
            <Search />

            <div className='pagination_arrows'>
              { pageNum === 1 ? null : <div className='left'><ArrowCircleLeftOutlined onClick={ this.paginateLeft } /></div> }
              { games.length < 20 ? null : <div className='right'><ArrowCircleRightOutlined onClick={ this.paginateRight } /></div> }
            </div>
          </div>

          <div className='games'>
            { games?.map( ( game: { id:number, background_image:string } ) => { 
              return (
                <GamesParallax 
                  key={ game.id } 
                  game={ game } 
                  offsetY={ offsetY }
                  scrolling={ scrolling }
                />
              );
            } ) }
          </div>
        </div>

        <iframe ref={ this.iframeData } name='search_iframe' style={{ display: 'none' }} />
        { count > 0 ? 
          <h2 id='search_count'>
            { this.loadPageCount() }
          </h2> : null }
      </>
    );
  }
}