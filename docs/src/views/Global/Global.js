import React, { Component, Fragment } from 'react';
import { GlobalHeader, GlobalContent } from '../Global';
import './Global.scss';

class Global extends Component {
    render() {
        return (
            <Fragment>
                <GlobalHeader />
                <GlobalContent />
            </Fragment>
        );
    }
}

export default Global;