import React, { PropTypes } from 'react'
import { Switch, Route } from 'react-router-dom'

const Layouts = props => {
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

Layouts.propTypes = {
    
}

export default Layouts