import React, { Component } from 'react'
import Form from './Form';

class FormContainer extends Component {
    render () {
        return (
            <Form
                {...this.state}
                {...this.props}
            />
        );
    }
}

export default FormContainer