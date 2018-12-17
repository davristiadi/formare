import React, { Component } from 'react';
import Alert from './Alert';

class AlertContainer extends Component {
    render() {
        return (
            <Alert
                {...this.state}
                {...this.props}
            />
        );
    }
}

export default AlertContainer;