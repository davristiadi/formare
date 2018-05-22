import React, { Component } from 'react'
import Forms from './Forms';

class FormsContainer extends Component {
    render() {
        return (
        	<Forms
        	    {...this.state}
        	    {...this.props}
        	/>
        )
    }
}

export default FormsContainer