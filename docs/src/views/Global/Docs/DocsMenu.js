import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DocsMenu extends Component {
    render() {
        return (
            <div className="fr-menu">
                <ul className="fr-menu__list">
                    <li className="fr-menu__item fr-menu__item--parent">Components</li>
                    <li className="fr-menu__item">
                        <Link to="/docs/components/alert">Alert</Link>
                    </li>
                    <li className="fr-menu__item">
                        <Link to="/docs/components/nav">Nav</Link>
                    </li>
                    <li className="fr-menu__item">
                        <Link to="/docs/components/navbar">Navbar</Link>
                    </li>
                    <li className="fr-menu__item">
                        <Link to="/docs/components/button">Button</Link>
                    </li>
                    <li className="fr-menu__item">
                        <Link to="/docs/components/card">Card</Link>
                    </li>
                    <li className="fr-menu__item">
                        <Link to="/docs/components/table">Table</Link>
                    </li>
                    <li className="fr-menu__item fr-menu__item--parent">Form</li>
                    <li className="fr-menu__item">
                        <Link to="/docs/forms/general">General</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DocsMenu;