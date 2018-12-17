import React, { Component } from 'react';
import Home from './Home';

class HomeContainer extends Component {
	state = {
		hero: {
			bgImage: `https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ca95b1290dfb28db0ee368546e55487&auto=format&fit=crop&w=1050&q=80`	
		}
	}
	
	render() {
		return (
			<Home
				{...this.state}
				{...this.props}
			/>
		)
	}
} 

export default HomeContainer;