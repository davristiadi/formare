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

class Global extends Component {
    render() {
        return (
            <div id="global">
                <GlobalHeader />
                <span className="header-separator"></span>
                <div className="container">
                    <div className="grids">
                        <aside className="grid grid-3 fr-sidebar">
                            <GlobalMenu />
                        </aside>
                        <main className="grid fr-main">
                            <Switch>
                                <Route path="/home" component={Home} />
                                <Route exact path="/buttons" component={Button} />
                                <Route exact path="/cards" component={Card} />
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Global;