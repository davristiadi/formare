import React, { Component } from 'react';
import Installation from './Installation';

class InstallationContainer extends Component {
  render() {
    return (
      <Installation
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default InstallationContainer;