import React, { PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Alert } from './Alert';
import { Nav } from './Nav';
import { Navbar } from './Navbar';
import { Button } from './Button';
import { Card } from './Card';

const Components = props => {    
    return (
        <Switch>
            <Route path="/docs/components/alert" component={Alert} />
            <Route path="/docs/components/nav" component={Nav} />
            <Route path="/docs/components/navbar" component={Navbar} />
            <Route path="/docs/components/button" component={Button} />
            <Route path="/docs/components/card" component={Card} />
        </Switch>
    )
}

Components.propTypes = {
    
}

export default Components