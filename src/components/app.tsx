
import { Component } from 'react';

// API
import RAWG from './RAWG/RAWG';

// components
import Header from './header/header';
import HomePage from './pages/home/home';
import SearchPage from './pages/search/search';
import Login from './pages/login/login';
import Account from './pages/account/account';
import Forum from './pages/forum/forum';
import Store from './pages/store/store';

// styling
import './app.scss';

export default class App extends Component {
  state = {
    activePage: 'home',
    searchPage: {
      games: {
        count: 0,
        results: []
      },
      searchVal: '',
      pageNum: 1
    },
    offsetY: 0,
    scrolling: false,
    sidebarOpen: false,
    accountInfo: null
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
    const { accountInfo } = this.state;

    if( selectedPage === 'account' && accountInfo === null ) {
      // do nothing..
    }
    else {
      this.setState({
        activePage: selectedPage
      });

      var tt0 = document.getElementsByTagName('title');
      tt0[ 0 ].innerHTML = `retro store - ${ selectedPage }`; 
    }
  }

  updateSearchVal = ( searchVal:string ) => {
    const { searchPage } = this.state;

    this.setState({
      searchPage: {
        searchVal: searchVal,
        games: searchPage.games,
        pageNum: searchPage.pageNum
      }
    });
  }

  makeSearch = async ( pageNum:number ) => {
    const { searchVal } = this.state.searchPage;

    this.setState({
      searchPage: {
        searchVal: searchVal,
        games: await RAWG( searchVal, pageNum ),
        pageNum: pageNum
      }
    });
  }

  render() {
    const { activePage, offsetY, scrolling, sidebarOpen, searchPage } = this.state;

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
          { activePage === 'search' ? 
            <SearchPage
              searchPage={ searchPage }
              updateSearchVal={ this.updateSearchVal }
              makeSearch={ this.makeSearch }
              offsetY={ offsetY }
              scrolling={ scrolling } /> : null }
          { activePage === 'login' ? <Login /> : null}
          { activePage === 'account' ? <Account/> : null}
          { activePage === 'forum' ? <Forum/> : null}
          { activePage === 'store' ? <Store/> : null}
        </div>
      </div>
    );
  }
}
