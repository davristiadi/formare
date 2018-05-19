import React, { PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button } from './Button';
import { Card } from './Card';

const Components = props => {    
    return (
        <Switch>
            <Route path="/docs/components/buttons" component={Button} />
            <Route path="/docs/components/cards" component={Card} />
        </Switch>
    )
}

Components.propTypes = {
    
}

export default Components