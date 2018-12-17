import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

class DocsMenu extends Component {
  render() {
    const { routes, history } = this.props;

    const classes = {
      menuItem: route => {
        return classNames(
          `Menu__item`,
          history.location.pathname === route.path
            ? "Menu__item--active"
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
          <li className="Menu__item">
            <Link className="Menu__label" to={route.path}>{route.title}</Link>
            <ul className="Menu__list">
              {renderRoute(route)}
            </ul>
          </li>
        )
      }
      else {
        return (
          <li className="Menu__item">
            <Link className="Menu__label" to={route.path}>{route.title}</Link>
          </li>
        )
      }
    }

    return (
      <div className="Menu">
        <ul className="Menu__list">
          { routes.map(route => {
            return (
              <Fragment>
                { renderMenuItems(route) }
              </Fragment>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default DocsMenu;
