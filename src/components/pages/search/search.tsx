
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
    const { searchVal, pageNum } = this.state;

    if( e.key === 'Enter' ) this.setState({ games: await RAWG( searchVal, pageNum ) });
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
      </div>
    );
  }
}