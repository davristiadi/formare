import React, { Component } from 'react'
import Structure from './Structure';

class StructureContainer extends Component {
    render () {
        return (
            <Structure
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default StructureContainer;