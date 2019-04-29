import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class DocsMenu extends Component {
  render() {
    const { routes, history } = this.props;

    const classes = {
      menuList: classNames('DocsMenu-list'),
      menuItem: (route, submenu) => {
        if (submenu) {
          return classNames(
            `DocsMenu-item`,
            history.location.pathname === route.path
              ? 'DocsMenu-item--isActive'
              : '',
          );
        } else {
          return classNames(
            'DocsMenu-item',
            route.hasChildren ? 'DocsMenu-item--hasSubmenu' : '',
            history.location.pathname === route.path
              ? 'DocsMenu-item--isActive'
              : '',
          );
        }
      },
      menuLink: classNames('DocsMenu-link'),
    };

    const renderSubmenuItem = route => {
      if (route.hasChildren) {
        return route.hasChildren.map(subroute => {
          return (
            <li className={classes.menuItem(subroute, true)}>
              <Link className={classes.menuLink} to={subroute.path}>
                {subroute.title}
              </Link>
            </li>
          );
        });
      }

      return null;
    };

    const renderSubmenu = route => {
      return <ul className={classes.menuList}>{renderSubmenuItem(route)}</ul>;
    };

    const renderMenuItems = route => {
      return (
        <li className={classes.menuItem(route, false)}>
          <Link className="DocsMenu-link" to={route.path}>
            {route.title}
          </Link>
          {route.hasChildren ? renderSubmenu(route) : null}
        </li>
      );
    };

    return (
      <div className="DocsMenu">
        <ul className="DocsMenu-list">
          {routes.map(route => (
            <Fragment>{renderMenuItems(route)}</Fragment>
          ))}
        </ul>
      </div>
    );
  }
}

export default DocsMenu;
