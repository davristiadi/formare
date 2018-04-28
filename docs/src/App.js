import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';

class App extends Component {
	componentDidMount = () => {
		document.title = 'Formare | Hassle-free CSS Framework to build web interfaces easily.';
	}
	
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
