
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
    searchVal: '',
    pageNum: 1
  }

  formAction = React.createRef<HTMLFormElement>();
  iframeData = React.createRef<HTMLIFrameElement>();

  checkData = () => {
    const searchData = this.iframeData.current?.contentWindow?.document.getElementById( 'search_data' );

    if( searchData?.innerHTML ) {
      const txt = searchData.textContent; // convert to plain text to get rid of the crappy html that got carried over.
      const txtJson = JSON.parse( String( txt ) ); // need to convert back to a string before we can break it into JSON.

      console.warn( txtJson.results ); // our 20 results
      console.warn( txtJson ); // more =)

      this.setState({ games: txtJson.results })
      return true;
    }

    return false;
  }

  updateSearchVal = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    this.setState({ searchVal: e.target.value });
  }

  // TODO: create drop-down search filter, so we could search by: games, genere, etc..
  search = async ( e:React.KeyboardEvent<HTMLInputElement> ) => {
    if( e.key === 'Enter' ) {
      // instead of going to RAWG, let's use an action to send searchVal and pageNum -> search.php
      this.formAction.current?.submit();

      const dataSearch = setInterval( () => { // keep checking the DOM every .5s until we have our data
        if( this.checkData() ) clearInterval( dataSearch ); // if we receive some data, stop checking for data
      }, 500 );
    }
  }

  paginateLeft = () => {
    console.warn( 'left arrow clicked..' );
  }

  paginateRight = () => {
    console.warn( 'right arrow clicked..' );
  }

  render() {
    const { games, searchVal, pageNum } = this.state;
    const { offsetY, scrolling } = this.props;

    return (
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
            value={ searchVal }
            onChange={ this.updateSearchVal }
            onKeyDown={ this.search }
          />

          <input name='pageNum' type='hidden' defaultValue={ pageNum } readOnly={ true } />
        </form>

        <div className='search_icons'>
          <Search />

          <div className='pagination_arrows'>
            <ArrowCircleLeftOutlined onClick={ this.paginateLeft } />
            <ArrowCircleRightOutlined onClick={ this.paginateRight } />
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

        <iframe ref={ this.iframeData } name='search_iframe' style={{ display: 'none' }} />
      </div>
    );
  }
}