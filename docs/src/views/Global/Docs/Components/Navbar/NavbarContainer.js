import React, { Component } from 'react'
import Navbar from './Navbar';

class NavbarContainer extends Component {
    render () {
        return (
            <Navbar
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default NavbarContainer