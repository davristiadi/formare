import React, { Component } from 'react'
import Overview from './Overview';

class OverviewContainer extends Component {
  render() {
    return (
      <Overview
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default OverviewContainer