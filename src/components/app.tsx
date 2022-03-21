
import { Component } from 'react';

// components
import Header from './header/header';
import HomePage from './pages/home/home';
import SearchPage from './pages/search/search';

// styling
import './app.scss';

export default class App extends Component<{ page:string }> {
  render() {
    const { page } = this.props;

    return (
      <div className='app'>
        <Header page={ page } />

        <div className='pages'>
          { page === 'home' ? <HomePage /> : null }
          { page === 'search' ? <SearchPage /> : null }
        </div>
      </div>
    );
  }
}
