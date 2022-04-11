
import { Component } from 'react';

// components
import Header from './header/header';
import HomePage from './pages/home/home';
import SearchPage from './pages/search/search';
import Login from './pages/login/login';
import Account from './pages/account/account';

// styling
import './app.scss';

export default class App extends Component {
  state = {
    activePage: 'home',
    offsetY: 0,
    scrolling: false,
    sidebarOpen: false
  }

  componentDidMount = () => {
    window.addEventListener( 'resize', this.handleResize )
  }

  handleResize = () => {
    if( window.innerWidth < 1920 ) {
      this.setState({ sidebarOpen: false });
    }
  }

  pauseTransition = () => {
    this.setState({ scrolling: true });

    setTimeout( () => {
      this.setState({ scrolling: false });
    }, 150 );
  }

  handleScrollOffset = ( e:React.UIEvent<HTMLElement> ) => {
    this.setState({ offsetY: e.currentTarget.scrollTop });
    this.pauseTransition();
  }

  handleSidebar = () => {
    const { sidebarOpen } = this.state;

    sidebarOpen ? // toggle
      this.setState({ sidebarOpen: false }) :
      this.setState({ sidebarOpen: true });
  }

  selectActivePage = ( selectedPage:string ) => {
    this.setState({
      activePage: selectedPage
    });

    var tt0 = document.getElementsByTagName('title');
    tt0[ 0 ].innerHTML = `retro store - ${ selectedPage }`; 
  }

  render() {
    const { activePage, offsetY, scrolling, sidebarOpen } = this.state;

    return (
      <div className='app'>
        <Header 
          activePage={ activePage } 
          selectActivePage={ this.selectActivePage }
          handleSidebar={ this.handleSidebar }
          sidebarOpen={ sidebarOpen }
        />

        <div className='pages' onScroll={ this.handleScrollOffset }>
          { activePage === 'home' ? <HomePage /> : null }
          { activePage === 'search' ? <SearchPage offsetY={ offsetY } scrolling={ scrolling } /> : null }
          { activePage === 'login' ? <Login /> : null}
          { activePage === 'account' ? <Account/> : null}
        </div>
      </div>
    );
  }
}
