import React, { Component } from 'react';
import ListGroup from './ListGroup';

class ListGroupContainer extends Component {
  render() {
    return (
      <ListGroup {...this.state} {...this.props} />
    );
  }
}

export default ListGroupContainer;