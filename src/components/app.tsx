
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
    offsetY: 0,
    scrolling: false
  }

  handleScrollOffset = ( e:React.UIEvent<HTMLElement> ) => {
    this.setState({
      offsetY: e.currentTarget.scrollTop,
      scrolling: true
    });

    setTimeout( () => { // disable zoom on hover, when scrolling.
      this.setState({
        scrolling: false
      });

    }, 150 );
  }

  selectActivePage = ( selectedPage:string ) => {
    this.setState({
      activePage: selectedPage
    });

    var tt0 = document.getElementsByTagName('title');
    tt0[ 0 ].innerHTML = `retro store - ${ selectedPage }`; 
  }

  render() {
    const { activePage, offsetY, scrolling } = this.state;

    return (
      <div className='app'>
        <Header activePage={ activePage } selectActivePage={ this.selectActivePage } />

        <div className='pages' onScroll={ this.handleScrollOffset }>
          { activePage === 'home' ? <HomePage offsetY={ offsetY } scrolling={ scrolling } /> : null }
          { activePage === 'search' ? <SearchPage /> : null }
        </div>
      </div>
    );
  }
}
