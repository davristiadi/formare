import React, { Component } from 'react';
import Home from './Home';

class HomeContainer extends Component {
	render() {
		return <Home {...this.state} {...this.props} />
	}
} 

export default HomeContainer;