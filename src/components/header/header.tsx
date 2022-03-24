
import { Component } from 'react';

// the header needs to know which page it's on, so it knows which links to display.
export default class Header extends Component<{ activePage:string, selectActivePage( selectedPage:string ):void }> {
  render() {
    const { activePage, selectActivePage } = this.props;

    return (
      <div id='header'>
        <div className='accent'>
          <h1> RETRO </h1>  
        </div>

        <ul className='links'>
            <li className={`link${ activePage === 'home' ? ' selected' : '' }`}>
              <h2 onClick={ () => selectActivePage( 'home' ) } > HOME </h2>
            </li>

            <li className={`link${ activePage === 'search' ? ' selected' : '' }`}>
              <h2 onClick={ () => selectActivePage( 'search' ) }> SEARCH </h2>
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