import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, hydrate } from 'react-dom';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import shell from 'highlight.js/lib/languages/shell';
import css from 'highlight.js/lib/languages/css';
import Loadable from 'react-loadable';
import registerServiceWorker from './registerServiceWorker';
import Main from './views';
import './App.scss';

const rootEl = document.getElementById('root');

// Register only select languages to be highlighted so we don't
// have to import all languages.
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

registerServiceWorker();

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Main />
      </BrowserRouter>
    );
  }
}

export default (() => {
  if (rootEl.hasChildNodes()) {
    return Loadable.preloadReady().then(() => {
      hydrate(<App />, rootEl);
    });
  }

  return render(<App />, rootEl);
})();

// import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Main } from './views/Main';

// class App extends Component {
// 	render() {
// 		return (
// 			<BrowserRouter basename={process.env.PUBLIC_URL}>
// 				<Switch>
// 					<Route path="/" component={Main} />
// 				</Switch>
// 			</BrowserRouter>
// 		);
// 	}
// }

// export default App;
