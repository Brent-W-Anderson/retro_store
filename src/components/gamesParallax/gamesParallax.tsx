
import { Component } from 'react';

export default class GamesParallax extends Component<{ game:{ id:number, background_image:string }, offsetY:number, scrolling:boolean }> {
  state = {
    zoom: 0
  }

  setZoom = () => {
    this.setState({ zoom: 0.1 });
  }

  releaseZoom = () => {
    this.setState({ zoom: 0 });
  }

  handleGames = () => {
    const { zoom } = this.state;
    const { game, offsetY, scrolling } = this.props;

    const x = game.id % 9;
    let y = game.id % 10;
    let position = 'top';

    if( y < 5 ) {
      position = 'top';
    }
    else {
      position = 'bottom';
    }
    const z = y * 2; // ratio offsets from left-to-right
    y*= 10; // ratio offsets from top-to-bottom
    
    switch( x ) {
      case 0: 
      case 5: 
      case 7: { // background, so this needs to be a slow scroll offset
        return (
            <div 
                className='game zero'
                onMouseOver={ this.setZoom }
                onMouseLeave={ this.releaseZoom }
                style={{
                    transform: `translateY(${ offsetY * 0.45 }px) scale(${ 0.7 + zoom })`,
                    top: position === 'top' ? y + 'px' : -y + 'px',
                    left: position === 'top' ? -z + 'vw' : z + 'vw', // reverse for left-to-right
                    transition: `${ scrolling ? 0 : zoom + 0.1 }s`
                }}
            > <img key={ game.id } src={ game.background_image } />
            </div>
        );
      }

      case 1:
      case 3: 
      case 8: { // center, so this can be a normal scroll offset
        return (
            <div 
                className='game one'
                onMouseOver={ this.setZoom }
                onMouseLeave={ this.releaseZoom }
                style={{
                    transform: `translateY(${ offsetY * 0.5 }px) scale(${ 1.0 + zoom })`,
                    top: position === 'top' ? y + 'px' : -y + 'px',
                    left: position === 'top' ? -z + 'vw' : z + 'vw', // reverse for left-to-right
                    transition: `${ scrolling ? 0 : zoom + 0.1 }s`
                }}
            > <img key={ game.id } src={ game.background_image } />
            </div>
        );
      }

      case 2:
      case 4: 
      case 6: { // we'll make this the foreground, so let's speed it up increase scroll offset
        return (
            <div 
                className='game two'
                onMouseOver={ this.setZoom }
                onMouseLeave={ this.releaseZoom }
                style={{
                    transform: `translateY(${ offsetY * 0.55 }px) scale(${ 1.3 + zoom })`,
                    top: position === 'top' ? y + 'px' : -y + 'px',
                    left: position === 'top' ? -z + 'vw' : z + 'vw', // reverse for left-to-right
                    transition: `${ scrolling ? 0 : zoom + 0.1 }s`
                }}
            > <img key={ game.id } src={ game.background_image } />
            </div>
        );
      }

      default: {
        console.error( 'no game components loaded..' );
      }
    }
  }

  render() {
    return this.handleGames();
  }
}