import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Global } from './views/Global';

class App extends Component {
	componentDidMount = () => {
		document.title = 'Formare | Hassle-free CSS Framework to build web interfaces easily.';
	}
	
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
