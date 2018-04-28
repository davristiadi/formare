import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';

class App extends Component {
	componentDidMount = () => {
		document.title = 'Formare | Hassle-free CSS Framework to build web interfaces easily.';
	}
	
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
		);
	}
}

export default App;
