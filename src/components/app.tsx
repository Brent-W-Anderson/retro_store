
import { Component } from 'react';

// components
import Header from './header/header';
import HomePage from './pages/home/home';
import SearchPage from './pages/search/search';

// styling
import './app.scss';

export default class App extends Component<{ page:string }> {
  state = {
    offsetY: 0
  }

  handleMouseOffset = ( e:React.UIEvent<HTMLElement> ) => {
    this.setState({
      offsetY: e.currentTarget.scrollTop
    });
  }

  render() {
    const { page } = this.props;
    const { offsetY } = this.state;

    return (
      <div className='app'>
        <Header page={ page } />

        <div className='pages' onScroll={ this.handleMouseOffset }>
          { page === 'home' ? <HomePage offsetY={ offsetY } /> : null }
          { page === 'search' ? <SearchPage /> : null }
        </div>
      </div>
    );
  }
}
