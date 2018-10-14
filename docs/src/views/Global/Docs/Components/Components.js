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
    const { routes } = props;

    return (
        <Switch>
            {
                routes.map(route => {
                    return <Route path={route.path} component={route.component} />
                })
            }
        </Switch>
    )
}

Components.propTypes = {

}

export default Components