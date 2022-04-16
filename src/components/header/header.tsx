
import { Component } from 'react';
import { Menu, MenuOpen, HomeOutlined, Search, Login, ManageAccountsOutlined, AddLink } from '@mui/icons-material';

// the header needs to know which page it's on, so it knows which links to display.
export default class Header extends Component<{ activePage:string, selectActivePage( selectedPage:string ):void, handleSidebar():void, sidebarOpen:boolean }> {
  render() {
    const { activePage, selectActivePage, handleSidebar, sidebarOpen } = this.props;

    return (
      <div id='header'>
        <div className={ `accent${ sidebarOpen ? ' open' : '' }` } style={{ height: sidebarOpen ? '261px' : '' }}>
          <h1> RETRO 
            { sidebarOpen ? 
                <MenuOpen onClick={ handleSidebar } /> : 
                <Menu onClick={ handleSidebar } /> }
          </h1>

          <ul className='sidebar'>
          <li className={`link${ activePage === 'forum' ? ' selected' : '' }`}>
              <h2 onClick={ () => selectActivePage( 'forum' ) } >
                <AddLink />
                <span> Forum </span>
              </h2>
            </li>

            <li className={`link${ activePage === 'store' ? ' selected' : '' }`}>
              <h2 onClick={ () => selectActivePage( 'store' ) } >
                <AddLink />
                <span> Store </span>
              </h2>
            </li>

            <li className='link inactive'>
              <h2>
                <AddLink />
                <span> LINK </span>
              </h2>
            </li>

            <li className='link inactive'>
              <h2>
                <AddLink />
                <span> LINK </span>
              </h2>
            </li>
          </ul>
        </div>

        <ul className='links'>
            <li className={`link${ activePage === 'home' ? ' selected' : '' }`}>
              <h2 onClick={ () => selectActivePage( 'home' ) } >
                <HomeOutlined />
                <span> HOME </span>
              </h2>
            </li>

            <li className={`link${ activePage === 'search' ? ' selected' : '' }`}>
              <h2 onClick={ () => selectActivePage( 'search' ) }>
                <Search />
                <span> SEARCH </span>
              </h2>
            </li>

            <li className={`link${ activePage === 'login' ? ' selected' : ''}`}>
              <h2 onClick={ () => selectActivePage( 'login' )}>
                <Login />
                <span> LOGIN </span>
              </h2>
            </li>

            <li className={`link inactive${ activePage === 'account' ? ' selected' : '' }`}>
              <h2 onClick={ () => selectActivePage( 'account' ) } >
                <ManageAccountsOutlined/>
                <span> ACCOUNT </span>
              </h2>
            </li>
        </ul>

        <div className='accent right'>
          <h1> RETRO </h1>  
        </div>
      </div>
    );
  }
}