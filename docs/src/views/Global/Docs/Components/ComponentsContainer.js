import React, { Component } from 'react'
import Components from './Components';

class ComponentsContainer extends Component {
    render () {
    	console.log(this.props);

        return (
            <Components
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default ComponentsContainer