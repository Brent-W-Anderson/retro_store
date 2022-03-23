
import { Component } from 'react';

// components
import Header from './header/header';
import HomePage from './pages/home/home';
import SearchPage from './pages/search/search';

// API
import RAWG from './RAWG/RAWG';

// styling
import './app.scss';

export default class App extends Component<{ page:string }> {
  state = {
    games: [],
    pageNum: 1, // change this to see a different page with more games or something else..
    offsetY: 0
  }

  handleMouseOffset = ( e:React.UIEvent<HTMLElement> ) => {
    this.setState({
      offsetY: e.currentTarget.scrollTop
    });
  }

  async componentDidMount() {
    const { pageNum } = this.state;
    const { page } = this.props;

    const x = Math.floor( Math.random() * 10 );

    if( page === 'home' ) {
      this.setState({
        games: await RAWG( 'games', x ) // search API TODO: move this to a more specific location that we need it within the components.
      })
    }
  }

  render() {
    const { page } = this.props;
    const { games, offsetY } = this.state;

    return (
      <div className='app'>
        <Header page={ page } />

        <div className='pages' onScroll={ this.handleMouseOffset }>
          { page === 'home' ? <HomePage games={ games } offsetY={ offsetY } /> : null }
          { page === 'search' ? <SearchPage /> : null }
        </div>
      </div>
    );
  }
}
