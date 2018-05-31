import React, { Component } from 'react'
import Tabs from './Tabs';

class TabsContainer extends Component {
    render () {
        return (
            <Tabs
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default TabsContainer