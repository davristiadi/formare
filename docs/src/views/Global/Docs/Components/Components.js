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

    const sortedRoutes = routes.sort((a, b) => {
        const first = a.title;
        const second = b.title;
        return (first < second) ? -1 : (first > second) ? 1 : 0;
    });
    
    return (
        <Switch>
            {
                sortedRoutes.map(route => {
                    return <Route path={route.path} component={route.component} />
                })
            }
        </Switch>
    )
}

Components.propTypes = {
    
}

export default Components