
import { Component } from 'react';

export default class HomePage extends Component<{ games:{}[], offsetY:number }> {
  handleGames = ( game:any ) => {
    const { offsetY } = this.props;
    const x = game.id % 3;
    const y = game.id % 40;
    let position = 'top';

    if( y < 20 ) {
      position = 'top';
    }
    else {
      position = 'bottom';
    }
    

    switch( x ) {
      case 0: { // background, so this needs to scroll slower and make the image smaller
        return (
          <div 
            key={ game.id } 
            className='game'
            style={{
              transform: `translateY(${ offsetY * 0.45 }px)`,
              top: position === 'top' ? y + 'px' : -y + 'px',
              zIndex: '1'
            }}
          >
            <img 
              key={ game.id } 
              src={ game.background_image }
              style={{
                transform: `scale( .7 )`
              }}
            />
          </div>
        );
      }

      case 1: { // center, so this can be normal
        return (
          <div 
            key={ game.id } 
            className='game'
            style={{
              transform: `translateY(${ offsetY * 0.5 }px)`,
              top: position === 'top' ? y + 'px' : -y + 'px',
              zIndex: '2'
            }}
          >
            <img 
              key={ game.id } 
              src={ game.background_image }
              style={{
                transform: `scale( 1 )`
              }}
            />
          </div>
        );
      }

      case 2: { // we'll make this the foreground, so let's speed it up and make the image bigger
        return (
          <div 
            key={ game.id } 
            className='game'
            style={{
              transform: `translateY(${ offsetY * 0.55 }px)`,
              top: position === 'top' ? y + 'px' : -y + 'px',
              zIndex: '3'
            }}
          >
            <img 
              key={ game.id } 
              src={ game.background_image }
              style={{
                transform: `scale( 1.3 )`
              }}
            />
          </div>
        );
      }

      default: {
        console.error( 'no game components loaded..' );
      }
    }
  }

  render() {
    const { games } = this.props;

    return (
      <div id='home' className="page">
        <h2> Welcome to Retro Retro </h2>

        <div id='rolodex'>
          <h2>Featured Content</h2>
        </div>

        <div className='games'>
          { games.map( this.handleGames ) }
        </div>
      </div>
    );
  }
}