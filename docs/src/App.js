import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './views/Main';

class App extends Component {
	render() {
		return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route path="/" component={Main} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
