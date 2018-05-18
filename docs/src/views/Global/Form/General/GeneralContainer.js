import React, { Component } from 'react'
import General from './General';

class GeneralContainer extends Component {
    render () {
        return (
            <General
                {...this.state}
                {...this.props}
            />
        );
    }
}

export default GeneralContainer