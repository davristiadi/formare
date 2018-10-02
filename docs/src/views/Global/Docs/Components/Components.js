import React, { PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Alert,
    Nav,
    Navbar,
    Button,
    Card,
    Table
} from '../Components';

const Components = props => {    
    return (
        <Switch>
            <Route path="/docs/components/alert" component={Alert} />
            <Route path="/docs/components/nav" component={Nav} />
            <Route path="/docs/components/navbar" component={Navbar} />
            <Route path="/docs/components/button" component={Button} />
            <Route path="/docs/components/card" component={Card} />
            <Route path="/docs/components/table" component={Table} />
        </Switch>
    )
}

Components.propTypes = {
    
}

export default Components