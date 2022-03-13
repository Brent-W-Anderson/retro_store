
import { Component } from 'react';

// components
import HomePage from './page_home/page_home';

// styling
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <HomePage />
      </div>
    );
  }
}
