import React, { Component } from 'react'
import Foundation from './Foundation';

class FoundationContainer extends Component {
    render () {
        return (
            <Foundation
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default FoundationContainer