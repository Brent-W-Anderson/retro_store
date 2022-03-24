
import { Component } from 'react';

// components
import Header from './header/header';
import HomePage from './pages/home/home';
import SearchPage from './pages/search/search';

// styling
import './app.scss';

export default class App extends Component {
  state = {
    activePage: 'home',
    offsetY: 0
  }

  handleScrollOffset = ( e:React.UIEvent<HTMLElement> ) => {
    this.setState({
      offsetY: e.currentTarget.scrollTop
    });
  }

  selectActivePage = ( selectedPage:string ) => {
    this.setState({
      activePage: selectedPage
    });

    var tt0 = document.getElementsByTagName('title');
    tt0[ 0 ].innerHTML = `retro store - ${ selectedPage }`; 
  }

  render() {
    const { activePage, offsetY } = this.state;

    return (
      <div className='app'>
        <Header activePage={ activePage } selectActivePage={ this.selectActivePage } />

        <div className='pages' onScroll={ this.handleScrollOffset }>
          { activePage === 'home' ? <HomePage offsetY={ offsetY } /> : null }
          { activePage === 'search' ? <SearchPage /> : null }
        </div>
      </div>
    );
  }
}
