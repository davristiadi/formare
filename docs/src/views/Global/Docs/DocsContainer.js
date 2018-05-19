import React, { Component } from 'react';
import Docs from './Docs';

class DocsContainer extends Component {
	render() {
		return (
			<Docs
				{...this.state}
				{...this.props}
			/>
		);
	}
}

export default DocsContainer;