
import { Component } from 'react';

// the header needs to know which page it's on, so it knows which links to display.
export default class Header extends Component<{ page:string }> {
  state = {
    activeLink: this.props.page.toLowerCase()
  }

  render() {
    const { activeLink } = this.state;

    return (
      <div id='header'>
        <div className='accent'>
          <div className='background'>
            <div className='curve' />
          </div>
        </div>

        <ul className='links'>
            <li className={`link${ activeLink === 'home' ? ' selected' : '' }`}>
              <a href={activeLink === 'home' ? '#' : `./index.php`}> Home </a>
            </li>

            <li className={`link${ activeLink === 'search' ? ' selected' : '' }`}>
              <a href={activeLink === 'search' ? '#' : `./search.php`}> Search </a>
            </li>

            <li className='link inactive'>
              <a href='#'> link 3 </a>
            </li>

            <li className='link inactive'>
              <a href='#'> link 4 </a>
            </li>
        </ul>

        <div className='accent right'>
          <div className='background'>
            <div className='curve' />
          </div>
        </div>
      </div>
    );
  }
}