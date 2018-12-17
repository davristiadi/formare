import React, { Component } from 'react'
import Grid from './Grid';

class GridContainer extends Component {
    render () {
        return (
            <Grid
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default GridContainer