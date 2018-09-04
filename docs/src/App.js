import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Global } from './views/Global';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Global} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
