
import { Component } from 'react';

// components
import Header from './header/header';
import HomePage from './page_home/page_home';
import SearchPage from './page_search/page_search';

// styling
import './app.scss';

export default class App extends Component<{ page:string }> {
  render() {
    const { page } = this.props;

    switch( page ) {
      case 'page_home': {
        return (
          <div className='app'>
            <Header page={ page } />

            <div className='pages'>
              <HomePage />
            </div>
          </div>
        )
      }

      case 'page_search': {
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
