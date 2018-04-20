import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App'

/*This will render the App component and everything in it to display to the DOM*/
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
