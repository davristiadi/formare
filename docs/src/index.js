import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./App.scss";
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
registerServiceWorker();
