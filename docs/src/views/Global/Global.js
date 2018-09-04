import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PropsRoute } from '../../components/Utilities';
import { GlobalHeader, GlobalFooter } from '../Global';
import { 
    Home,
    Docs
} from '../Global';

class Global extends Component {
    render() {
        return (
            <div className="fr-global">
                <GlobalHeader />
                <div className="fr-global-body">
                    <Switch>
                        <PropsRoute exact path="/" component={Home} {...this.props} />
                        <PropsRoute path="/docs" component={Docs} {...this.props} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Global;