import React, { Component } from 'react';
import { GlobalHeader, GlobalContent } from '../Global';

class Global extends Component {
    render() {
        return (
            <div className="layout">
                <GlobalHeader />
                <GlobalContent />
            </div>
        );
    }
}

export default Global;