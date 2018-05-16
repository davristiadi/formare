import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { 
    GlobalHeader, 
    GlobalFooter, 
    GlobalMenu 
} from '../Global';
import { Home } from './Home';
import { Button } from './Button';
import { Card } from './Card';
import { Form } from './Form';

class Global extends Component {
    render() {
        return (
            <div id="global">
                <GlobalHeader />
                <span className="header-separator"></span>
                <div className="container">
                    <div className="grids">
                        <aside className="fr-sidebar grid grid-3">
                            <GlobalMenu />
                        </aside>
                        <main className="fr-main grid">
                            <Switch>
                                <Route path="/home" component={Home} />
                                <Route exact path="/buttons" component={Button} />
                                <Route exact path="/cards" component={Card} />
                                <Route exact path="/form" component={Form} />
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Global;