import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GlobalMenu extends Component {
    render() {
        return (
            <div className="fr-menu">
                <ul className="fr-menu__list">
                    <li className="fr-menu__item fr-menu__item--parent">Components</li>
                    <li className="fr-menu__item">
                        <Link to="/buttons">Buttons</Link>
                    </li>
                    <li className="fr-menu__item">
                        <Link to="/cards">Cards</Link>
                    </li>
                    <li className="fr-menu__item fr-menu__item--parent">Form</li>
                    <li className="fr-menu__item">
                        <Link to="buttons">Inputs</Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default GlobalMenu;