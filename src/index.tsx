
import ReactDOM from 'react-dom';
import App from './components/app';

// find the root element and begin app there.
const root = document.getElementById('root');

if( root ) {
  ReactDOM.render(
    <App />,
    root
  );
}
