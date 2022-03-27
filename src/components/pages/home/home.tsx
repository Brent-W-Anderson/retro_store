
import { Component } from 'react';

export default class HomePage extends Component {
  render() {
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
      </div>
    );
  }
}