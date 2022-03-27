
import { Component } from 'react';

// components
import GamesParallax from '../../gamesParallax/gamesParallax';

// API
import RAWG from '../../RAWG/RAWG';

export default class HomePage extends Component<{ offsetY:number, scrolling:boolean }> {
  state = {
    games: []
  }

  async componentDidMount() {
    const pageNum = Math.floor( Math.random() * 10 );

    this.setState({
      games: await RAWG( 'games', pageNum ) // fetch some games from our RAWG API
    })
  }

  render() {
    const { games } = this.state;
    const { offsetY, scrolling } = this.props;

    return (
      <div id='home' className="page">
        <div id='homePageIntro'>
          <h3>Welcome to Retro Retro</h3>
        </div>
        <div className='featured'>
         This is where our rotating featured image should go
         
        </div>
        <div className='click-container'>
          <div className='box' ><a href='link'>On Sale</a></div>
          <div className='box' >Featured Page</div>
          <div className='box' >Xbox</div>
          <div className='box' >Playstation</div>
          <div className='box' >Nintendo</div>
          <div className='box' >SEGA/NES</div>
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