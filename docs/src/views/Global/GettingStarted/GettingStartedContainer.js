import React, { Component } from 'react'
import GettingStarted from './GettingStarted';

class GettingStartedContainer extends Component {
    render () {
        return (
            <GettingStarted
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default GettingStartedContainer