
import { Component } from 'react';
import { Menu, MenuOpen, Home, Search } from '@mui/icons-material';

// the header needs to know which page it's on, so it knows which links to display.
export default class Header extends Component<{ activePage:string, selectActivePage( selectedPage:string ):void, handleSidebar():void, sidebarOpen:boolean }> {
  render() {
    const { activePage, selectActivePage, handleSidebar, sidebarOpen } = this.props;

    return (
      <div id='header'>
        <div className={ `accent${ sidebarOpen ? ' open' : '' }` } style={{ height: sidebarOpen ? 'calc( 100vh - 19px )' : '' }}>
          <h1> RETRO 
            { sidebarOpen ? 
                <MenuOpen onClick={ handleSidebar } /> : 
                <Menu onClick={ handleSidebar } /> }
          </h1>

          <ul className='sidebar'>
            <li className='link inactive'>
              <h2> LINK </h2>
            </li>

            <li className='link inactive'>
              <h2> LINK </h2>
            </li>

            <li className='link inactive'>
              <h2> LINK </h2>
            </li>

            <li className='link inactive'>
              <h2> LINK </h2>
            </li>
          </ul>
        </div>

        <ul className='links'>
            <li className={`link${ activePage === 'home' ? ' selected' : '' }`}>
              <h2 onClick={ () => selectActivePage( 'home' ) } ><Home /> HOME </h2>
            </li>

            <li className={`link${ activePage === 'search' ? ' selected' : '' }`}>
              <h2 onClick={ () => selectActivePage( 'search' ) }><Search /> SEARCH </h2>
            </li>

            <li className='link inactive'>
              <h2> LINK </h2>
            </li>

            <li className='link inactive'>
              <h2> LINK </h2>
            </li>
        </ul>

        <div className='accent right'>
          <h1> RETRO </h1>  
        </div>
      </div>
    );
  }
}