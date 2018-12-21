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
            ? "Menu__item--isActive"
            : null
        );
      }
    };

    const renderSubmenuItem = route => {
      if (route.hasChildren) {
        return route.hasChildren.map(subroute => {
          return (
            <li className={classes.menuItem(subroute)}>
              <Link className="Menu__link" to={subroute.path}>{subroute.title}</Link>
            </li>
          );
        });
      }

      return null;
    };

    const renderSubmenu = route => {
      return <ul className="Menu__list">{renderSubmenuItem(route)}</ul>
    }

    const renderMenuItems = route => {
      return (
        <li className={`Menu__item ${route.hasChildren ? 'Menu__item--hasSubmenu' : ''}`}>
          <Link className="Menu__link" to={route.path}>{route.title}</Link>
          { route.hasChildren ? renderSubmenu(route) : null }
        </li>
      )
    }

    return (
      <div className="Menu">
        <ul className="Menu__list">
          { routes.map(route => <Fragment>{ renderMenuItems(route) }</Fragment>) }
        </ul>
      </div>
    )
  }
}

export default DocsMenu;
