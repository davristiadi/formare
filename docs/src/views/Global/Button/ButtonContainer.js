import React, { Component } from 'react';
import Button from './Button';

class ButtonContainer extends Component {
    render() {
        return <Button {...this.state} {...this.props} />
    }
}

export default ButtonContainer;