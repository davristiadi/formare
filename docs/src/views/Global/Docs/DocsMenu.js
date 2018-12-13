import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

class DocsMenu extends Component {
  render() {
    const { routes, history } = this.props;

    const classes = {
      menuItem: route => {
        return classNames(
          `fr-menu__item`,
          history.location.pathname === route.path
            ? "fr-menu__item--active"
            : null
        );
      }
    };

    const renderRoute = route => {
      if (route.hasChildren) {
        return route.hasChildren.map(subroute => {
          return (
            <li className={classes.menuItem(subroute)}>
              <Link to={subroute.path}>{subroute.title}</Link>
            </li>
          );
        });
      }

      return null;
    };

    const renderMenuItems = (route) => {
      if(route.hasChildren) {
        return (
          <ul className="fr-menu__list">
            {renderRoute(route)}
          </ul>
        )
      }

      return null;
    }

    return (
      <div className="fr-menu">
        { routes.map(route => {
          return (
            <Fragment>
              <span className="fr-menu__label">
                <Link to={route.path}>{route.title}</Link>
              </span>
              { renderMenuItems(route) }
            </Fragment>
          )
        })}
      </div>
    );
  }
}

export default DocsMenu;
