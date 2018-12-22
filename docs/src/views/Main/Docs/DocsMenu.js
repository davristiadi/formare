import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

class DocsMenu extends Component {
  render() {
    const { routes, history } = this.props;

    const classes = {
      menuItem: route => {
        return classNames(
          `DocsMenu-item`,
          history.location.pathname === route.path
            ? "DocsMenu-item--isActive"
            : null
        );
      }
    };

    const renderSubmenuItem = route => {
      if (route.hasChildren) {
        return route.hasChildren.map(subroute => {
          return (
            <li className={classes.menuItem(subroute)}>
              <Link className="DocsMenu-link" to={subroute.path}>{subroute.title}</Link>
            </li>
          );
        });
      }

      return null;
    };

    const renderSubmenu = route => {
      return <ul className="DocsMenu-list">{renderSubmenuItem(route)}</ul>
    }

    const renderMenuItems = route => {
      return (
        <li className={`DocsMenu-item ${route.hasChildren ? 'DocsMenu-item--hasSubmenu' : ''}`}>
          <Link className="DocsMenu-link" to={route.path}>{route.title}</Link>
          { route.hasChildren ? renderSubmenu(route) : null }
        </li>
      )
    }

    return (
      <div className="DocsMenu">
        <ul className="DocsMenu-list">
          { routes.map(route => <Fragment>{ renderMenuItems(route) }</Fragment>) }
        </ul>
      </div>
    )
  }
}

export default DocsMenu;
