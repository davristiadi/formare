import React, { Component } from 'react'
import Start from './Start';

class StartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: props.hasChildren
    }
  }
  
  render() {
    return (
      <Start
        {...this.state}
        {...this.props}
      />
    )
  }
}

export default StartContainer