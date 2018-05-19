import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PropsRoute = props => {
    const {
        component,
        ...rest
    } = props;
    
    const renderMergedProps = (component, ...rest) => {
        let finalProps = Object.assign({}, ...rest);
        return React.createElement(component, finalProps);
    }
    
    const renderRoute = (routeProps) => {
        return renderMergedProps(component, routeProps, rest);
    }
    
    return (
        <Route {...rest} render={renderRoute}></Route>
    );
};

PropsRoute.propTypes = {
    
};

export default PropsRoute;