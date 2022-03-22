
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
    pageNum: 1 // change this to see a different page with more games or something else..
  }

  async componentDidMount() {
    const { pageNum } = this.state;
    const { page } = this.props;

    if( page === 'home' ) {
      this.setState({
        games: await RAWG( 'games', pageNum ) // search API TODO: move this to a more specific location that we need it within the components.
      })
    }
  }

  render() {
    const { page } = this.props;
    const { games } = this.state;

    return (
      <div className='app'>
        <Header page={ page } />

        <div className='pages'>
          { page === 'home' ? <HomePage games={ games } /> : null }
          { page === 'search' ? <SearchPage /> : null }
        </div>
      </div>
    );
  }
}
