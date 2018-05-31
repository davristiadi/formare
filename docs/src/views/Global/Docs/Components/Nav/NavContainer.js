import React, { Component } from 'react'
import Nav from './Nav';

class NavContainer extends Component {
    render () {
        return (
            <Nav
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default NavContainer