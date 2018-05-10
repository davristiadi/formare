import React, { Component } from 'react';
import Card from './Card';

class CardContainer extends Component {
    render() {
        return <Card {...this.state} {...this.props} />
    }
}

export default CardContainer;