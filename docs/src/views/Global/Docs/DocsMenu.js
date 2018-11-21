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

    // const sortedRoutes = routes.sort((a, b) => {
    //     const first = a.title;
    //     const second = b.title;
    //     return (first < second) ? -1 : (first > second) ? 1 : 0;
    // });

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
              { renderMenuItems(route)}
            </Fragment>
          )
        })}
      
        {/* <ul className="fr-menu__list">
          {routes.map(route => {
            return (
              <Fragment>
                <li className="fr-menu__item fr-menu__item--parent">
                  <Link to={route.path}>{route.title}</Link>
                </li>
                {renderRoute(route)}
              </Fragment>
            );
          })}
        </ul> */}
      </div>
    );
  }
}

export default DocsMenu;
