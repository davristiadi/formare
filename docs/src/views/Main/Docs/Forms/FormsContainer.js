import React, { Component } from 'react'
import Forms from './Forms';
import {
	Overview,
	Inputs,
	InputSet
} from '../Forms';

class FormsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: props.hasChildren,
      links: [
        {
          path: '/docs/forms/overview',
          title: 'Overview',
          description: 'Officia laboris ut do deserunt pariatur irure anim amet pariatur nulla sint ut qui.',
          component: Overview
        },
        {
          path: '/docs/forms/inputs',
          title: 'Inputs',
          description: 'Do Lorem esse laborum aute labore in dolor.',
          component: Inputs
        },
        {
          path: '/docs/forms/input-set',
          title: 'Input Set',
          description: 'Ullamco nisi deserunt aute id aliqua in amet consequat.',
          component: InputSet
        }
      ]
    }
  }
  
  render() {
    return (
      <Forms
        {...this.state}
        {...this.props}
      />
    )
  }
}

export default FormsContainer