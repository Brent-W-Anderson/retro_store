
import { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div id='header'>
        <ul className='links'>
            <li className='link'> link 1 </li>
            <li className='link'> link 2 </li>
            <li className='link'> link 3 </li>
        </ul>
      </div>
    );
  }
}