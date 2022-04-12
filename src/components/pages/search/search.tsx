
import { Component } from 'react';
import { Search, ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material';

// components
import GamesParallax from '../../gamesParallax/gamesParallax';

type SearchProps = {
  searchPage: {
    games: {
      count:number,
      results:{ id:number, background_image:string }[]
    },
    searchVal:string,
    pageNum:number
  },
  offsetY:number,
  scrolling:boolean,
  updateSearchVal:Function,
  makeSearch:Function
}

export default class SearchPage extends Component<SearchProps> {
  updateSearchVal = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    const { updateSearchVal } = this.props;

    updateSearchVal( e.target.value );
  }

  // TODO: create drop-down search filter, so we could search by: games, genere, etc..
  search = async ( e:React.KeyboardEvent<HTMLInputElement> ) => {
    const { makeSearch } = this.props;

    if( e.key === 'Enter' ) {
      makeSearch( 1 );
    }
  }

  paginateLeft = async () => {
    const { searchPage, makeSearch } = this.props;

    if( searchPage.pageNum > 1 ) {
      makeSearch( searchPage.pageNum - 1 );
    }
  }

  paginateRight = async () => {
    const { searchPage, makeSearch } = this.props;

    if( searchPage.games.results.length === 20 ) {
      makeSearch( searchPage.pageNum + 1 );
    }
  }

  render() {
    const { games, searchVal, pageNum } = this.props.searchPage;
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
            { games.results.length === 20 ? <ArrowCircleRightOutlined onClick={ this.paginateRight } /> : null }
          </div>
        </div>

        <div className='games'>
          { games?.results.map( ( game: { id:number, background_image:string } ) => { 
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