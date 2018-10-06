import React, { Component } from 'react'
import Start from './Start';

class StartContainer extends Component {
    render () {
        return (
            <Start
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default StartContainer