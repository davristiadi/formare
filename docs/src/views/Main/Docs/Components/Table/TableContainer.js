import React, { Component } from 'react';
import Table from './Table';

class TableContainer extends Component {
  render() {
    return <Table {...this.state} {...this.props} />;
  }
}

export default TableContainer;
