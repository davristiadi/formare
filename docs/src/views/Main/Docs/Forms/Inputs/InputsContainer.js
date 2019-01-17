import React, { Component } from 'react';
import Inputs from './Inputs';

class InputsContainer extends Component {
  render() {
    return (
      <Inputs
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default InputsContainer;