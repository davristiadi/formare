import React, { PropTypes } from 'react'
import { Switch, Route } from 'react-router-dom'
import { General } from './General'

const Form = props => {
    return (
        <Switch>
            <Route path="/docs/forms/general" component={General} />
        </Switch>
    )
}

Form.propTypes = {
    
}

export default Form