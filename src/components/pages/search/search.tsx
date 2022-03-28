
import { Component } from 'react';
import { Search } from '@mui/icons-material';

// API
import RAWG from '../../RAWG/RAWG';

// components
import GamesParallax from '../../gamesParallax/gamesParallax';

export default class SearchPage extends Component<{ offsetY:number, scrolling:boolean }> {
  state = {
    games: [],
    searchVal: ''
  }

  updateSearchVal = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    this.setState({ searchVal: e.target.value });
  }

  // TODO: pagination ( need to know total # of pages with return data )
  // TODO: create drop-down search filter, so we could search by: games, genere, etc..
  search = async ( e:React.KeyboardEvent<HTMLInputElement> ) => {
    const { searchVal } = this.state;
    const pageNum = 1;

    if( e.key === 'Enter' ) this.setState({ games: await RAWG( searchVal, 'games', pageNum ) });
  }

  render() {
    const { games, searchVal } = this.state;
    const { offsetY, scrolling } = this.props;

    return (
      <div id='search' className="page">
        <Search />
        <input 
          type='text'
          placeholder='search RAWG games library..'
          value={ searchVal }
          onChange={ this.updateSearchVal }
          onKeyDown={ this.search }
        />

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