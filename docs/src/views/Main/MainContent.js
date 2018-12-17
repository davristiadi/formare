import React from 'react'
import { Switch } from 'react-router-dom'
import { PropsRoute } from '../../components/Utilities'
import { Home, Docs } from '../Main'

const MainContent = props => {
  return (
    <main className="MainContent">
      <Switch>
        <PropsRoute exact path="/" component={Home} {...props} />
        <PropsRoute path="/docs" component={Docs} {...props} />
      </Switch>
    </main>
  )
}

export default MainContent