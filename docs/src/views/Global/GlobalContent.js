import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch } from 'react-router-dom'
import { PropsRoute } from '../../components/Utilities'
import { Home, Docs } from '../Global'

const GlobalContent = props => {
    return (
        <div className="fr-main">
            <Switch>
                <PropsRoute exact path="/" component={Home} {...props} />
                <PropsRoute path="/docs" component={Docs} {...props} />
            </Switch>
        </div>
    )
}

GlobalContent.propTypes = {
    
}

export default GlobalContent