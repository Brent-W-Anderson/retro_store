
import { Component } from 'react';

import RAWG from '../../RAWG/RAWG';

export default class HomePage extends Component {
  state = {
    featured: []
  }

  async componentDidMount() {
    // remove comments when the RAWG API has a featured carousel to build into.
    // this.setState({ featured: await RAWG( 'featured', 'games', 1 ) });
  }

  buildFeaturedContent = ( game:{ name:string } ) => {
    console.log( game );

    return (
      <>
        <h4> { game.name } </h4>
      </>
    );
  }

  render() {
    const { featured } = this.state;

    return (
      <div id='home' className="page">
        <div id='homePageIntro'>
          <h3>Welcome to Retro Retro</h3>
        </div>
        <div className='featured'>
         {/* This is where our rotating featured image should go */}
         
        </div>
        <div className='click-container'>
          <div className='box' ><a href='link'>On Sale</a></div>
          <div className='box' >Featured Page</div>
          <div className='box' >Xbox</div>
          <div className='box' >Playstation</div>
          <div className='box' >Nintendo</div>
          <div className='box' >SEGA/NES</div>
        </div>
      </div>
    );
  }
}