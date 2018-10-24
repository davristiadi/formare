import React from 'react'
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import { Article } from 'components/Article';
import { Title } from 'components/Titles';

const Layouts = props => {
    const { routes, path } = props; 
    
    return (
        <Switch>
            <Route exact path={path} component={Home} />
            {
                routes.map(route => {
                    return <Route path={route.path} component={route.component} />
                })
            }
        </Switch>
    )
}

const Home = () => {
    return (
        <div id="layouts-home">
            <Article color="red">

            </Article>
        </div>
    )
}

Layouts.propTypes = {
    
}

export default Layouts