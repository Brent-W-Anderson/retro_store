
// ***CRITICAL*** move RAWG API request to .php, so we can hide API key from the client.
// We can accomplish this by sending the state information to .php through an action, so we know which data and page to fetch from the backend.
// set a cookie in .php, so the information is available for the frontend to display on request.

import React from 'react';
import { Component } from 'react';
import { Search, ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material';

// API
import RAWG from '../../RAWG/RAWG';

// components
import GamesParallax from '../../gamesParallax/gamesParallax';

export default class SearchPage extends Component<{ offsetY:number, scrolling:boolean }> {
  state = {
    games: [],
    searchVal: '',
    pageNum: 1
  }

  formAction = React.createRef<HTMLFormElement>();

  updateSearchVal = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    this.setState({ searchVal: e.target.value });
  }

  // TODO: create drop-down search filter, so we could search by: games, genere, etc..
  search = async ( e:React.KeyboardEvent<HTMLInputElement> ) => {
    const { searchVal, pageNum } = this.state;

    if( e.key === 'Enter' ) {
      // instead of going to RAWG, let's use an action to send searchVal and pageNum -> search.php
      this.formAction.current?.submit();

      // this.setState({ games: await RAWG( searchVal, pageNum ) });
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
          action='./index.php'
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

        <iframe name='search_iframe' style={{ display: 'none' }} />
      </div>
    );
  }
}