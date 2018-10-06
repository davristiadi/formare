import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class DocsMenu extends Component {
    render() {
        const { routes } = this.props;

        return (
            <div className="fr-menu">
                <ul className="fr-menu__list">
                    {
                        routes.map(route => {
                            return (
                                <Fragment>
                                    <li className="fr-menu__item fr-menu__item--parent">
                                        <Link to={route.path}>{route.title}</Link>
                                    </li>
                                    {
                                        route.hasChildren
                                        ? route.hasChildren.map(subroute => {
                                            return (
                                                <li className="fr-menu__item">
                                                    <Link to={subroute.path}>{subroute.title}</Link>
                                                </li>
                                            )       
                                        })
                                        : null
                                    }
                                </Fragment>
                                
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default DocsMenu;