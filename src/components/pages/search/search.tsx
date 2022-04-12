
// ***CRITICAL*** move RAWG API request to .php, so we can hide API key from the client.
// We can accomplish this by sending the state information to .php through an action, so we know which data and page to fetch from the backend.
// set a cookie in .php, so the information is available for the frontend to display on request.

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

  updateSearchVal = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    this.setState({ searchVal: e.target.value });
  }

  // TODO: create drop-down search filter, so we could search by: games, genere, etc..
  search = async ( e:React.KeyboardEvent<HTMLInputElement> ) => {
    const { searchVal } = this.state;

    if( e.key === 'Enter' ) {
      this.setState({ 
        games: await RAWG( searchVal, 1 ),
        pageNum: 1
      });
    }
  }

  paginateLeft = async () => {
    const { searchVal, pageNum } = this.state;

    if( pageNum > 1 ) {
      this.setState({
        games: await RAWG( searchVal, pageNum - 1 ),
        pageNum: pageNum - 1
      });
    }
  }

  paginateRight = async () => {
    const { games, searchVal, pageNum } = this.state;

    if( games.length === 20 ) {
      this.setState({
        games: await RAWG( searchVal, pageNum + 1 ),
        pageNum: pageNum + 1
      });
    }
  }

  render() {
    const { games, searchVal, pageNum } = this.state;
    const { offsetY, scrolling } = this.props;

    return (
      <div id='search' className="page">
        <input 
          type='text'
          placeholder='search RAWG games library..'
          value={ searchVal }
          onChange={ this.updateSearchVal }
          onKeyDown={ this.search }
        />

        <div className='search_icons'>
          <Search />

          <div className='pagination_arrows'>
            { pageNum > 1 ? <ArrowCircleLeftOutlined onClick={ this.paginateLeft } /> : null }
            { games.length === 20 ? <ArrowCircleRightOutlined onClick={ this.paginateRight } /> : null }
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
    );
  }
}