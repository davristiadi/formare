import React, { Component } from 'react'
import Blocks from './Blocks';

class BlocksContainer extends Component {
    render () {
        return (
            <Blocks
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default BlocksContainer