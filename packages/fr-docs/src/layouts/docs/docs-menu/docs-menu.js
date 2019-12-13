import React, { useContext } from 'react';
import classNames from 'classnames';
import { MainContext } from 'layouts/main/main-provider';
import { Link } from 'gatsby';
import './docs-menu.scss';

const DocsMenu = () => {
  const { routes } = useContext(MainContext);

  const classes = {
    Menu: classNames(`DocsMenu`),
    MenuList: classNames(`DocsMenu-list`),
  };

  // Sort sub-routes by title property alphabetically when 'sortChildren' property is set to true.
  const DocsSubmenu = ({ routes }) => {
    // if (sortChildren) {
    //   routes.sort((a, b) => {
    //     return a.title.localeCompare(b.title);
    //   });
    // }

    return (
      <ul className="DocsMenu-list">
        {routes.map(({ path, title }, i) => {
          const classes = {
            MenuItem: classNames(`DocsMenu-item`),
            MenuLink: classNames(`DocsMenu-link`),
          };

          return (
            <li key={i} className={classes.MenuItem}>
              <Link
                className={classes.MenuLink}
                activeClassName="is-active"
                partiallyActive={true}
                to={path}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <aside className={classes.Menu}>
      <ul className={classes.MenuList}>
        {routes.map(({ title, path, hasChildren, sortChildren }, i) => {
          const classes = {
            MenuItem: classNames(
              `DocsMenu-item`,
              hasChildren ? `DocsMenu-item--hasChildren` : null,
            ),
            MenuLink: classNames(`DocsMenu-link`),
          };

          return (
            <li key={i} className={classes.MenuItem}>
              <Link
                className={classes.MenuLink}
                activeClassName="is-active"
                to={path}
              >
                {title}
              </Link>
              {hasChildren && (
                <DocsSubmenu routes={hasChildren} sortChildren={sortChildren} />
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default DocsMenu;
