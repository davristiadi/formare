import React, { useContext } from 'react';
import classNames from 'classnames';
import { MainContext } from 'layouts/main-provider';
import { Link } from 'gatsby';
import './docs.scss';

const DocsMenu = () => {
  const { routes } = useContext(MainContext);
  let classes = {
    Menu: classNames(`DocsMenu`),
    MenuList: classNames(`DocsMenu-list`),
    MenuItem: classNames(`DocsMenu-item`),
  };

  const DocsSubmenu = ({ routes }) => {
    console.log(routes);

    return routes.map(({ path, title }) => {
      return (
        <li className={classes.MenuItem}>
          <Link
            className={classes.MenuLink}
            activeClassName="is-active"
            to={path}
          >
            {title}
          </Link>
        </li>
      );
    });
  };

  return (
    <aside className={classes.Menu}>
      <ul className={classes.MenuList}>
        {routes.map(({ title, path, hasChildren }) => {
          classes = {
            ...classes,
            MenuLink: classNames(
              `DocsMenu-link`,
              hasChildren ? `DocsMenu-link--hasChildren` : null,
            ),
          };

          return (
            <li className={classes.MenuItem}>
              <Link
                className={classes.MenuLink}
                activeClassName="is-active"
                to={path}
              >
                {title}
              </Link>
              {hasChildren ? <DocsSubmenu routes={hasChildren} /> : null}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default DocsMenu;
