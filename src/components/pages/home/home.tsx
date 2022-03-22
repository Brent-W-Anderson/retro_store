
import { Component } from 'react';

export default class HomePage extends Component<{ games:{}[] }> {
  handleGames = ( game: any ) => {
    return (
      <div key={ game.id } className='game'>
        <img key={ game.id } src={ game.background_image } />
      </div>
    );
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