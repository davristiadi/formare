import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PropsRoute } from '../../components/Utilities';
import { GlobalHeader, GlobalFooter } from '../Global';
import { Home } from './Home';
import { Docs } from './Docs';

class Global extends Component {
    render() {
        return (
            <div id="global">
                <GlobalHeader />
                <span className="header-separator"></span>
                <Switch>
                    <PropsRoute exact path="/" component={Home} {...this.props} />
                    <PropsRoute path="/docs" component={Docs} {...this.props} />
                </Switch>
            </div>
        );
    }
}

export default Global;