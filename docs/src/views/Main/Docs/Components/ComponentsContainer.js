import React, { Component } from 'react'
import Components from './Components';

class ComponentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: props.hasChildren
    }
  }

  render() {    
    return (
      <Components
        {...this.state}
        {...this.props}
      />
    )
  }
}

export default ComponentsContainer