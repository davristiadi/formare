import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch } from 'react-router-dom'
import { PropsRoute } from '../../components/Utilities'
import { Home, Docs, GettingStarted } from '../Global'

const GlobalContent = props => {
  return (
    <main className="fr-global-content">
      <Switch>
        <PropsRoute exact path="/" component={Home} {...props} />
        <PropsRoute path="/docs" component={Docs} {...props} />
      </Switch>
    </main>
  )
}

GlobalContent.propTypes = {

}

export default GlobalContent