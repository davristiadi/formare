import React, { Component } from 'react'
import Layouts from './Layouts'

class LayoutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: props.hasChildren
    }
  }

  render() {
    return (
      <Layouts
        {...this.state}
        {...this.props}
      />
    )
  }
}

export default LayoutsContainer