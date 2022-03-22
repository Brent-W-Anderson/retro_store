
import { Component } from 'react';

// components
import Header from './header/header';
import HomePage from './pages/home/home';
import SearchPage from './pages/search/search';

// styling
import './app.scss';

export default class App extends Component<{ page:string }> {
  state = {
    games: [],
    pageNum: 1
  }

  async componentDidMount() {
    const { pageNum } = this.state;

    const url = 'https://api.rawg.io/api'; // api url
    const search = '/games?'; // what data to grab
    const key = '&key=' + process.env.RAWG_API_KEY; // RAWG API KEY ( create and .env file at the root of the project with your own key )
    const page = `&page=${ pageNum }`; // which page to target
    const page_size = '&page_size=10'; // how many items to show on ea. page

    await fetch( url + search + key + page + page_size )
    .then( response => response.json() )
    .then( data => this.setState({ games: data.results }) );
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
