import React, { Component } from 'react'
import General from './General';

class GeneralContainer extends Component {
    render () {
    	console.log(123);

        return (
            <General
                {...this.state}
                {...this.props}
            />
        );
    }
}

export default GeneralContainer