
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

    switch( page ) {
      case 'home': {
        return (
          <div className='app'>
            <Header page={ page } />

            <div className='pages'>
              <HomePage />
            </div>
          </div>
        )
      }

      case 'search': {
        return (
          <div className='app'>
            <Header page={ page } />

            <div className='pages'>
              <SearchPage />
            </div>
          </div>
        )
      }
    }
  }
}
