import React, { useState, useEffect } from 'react';

export const MainContext = React.createContext({});

/**
 * @name MainProvider
 * @desc A context wrapper to provide data used across pages and components globally.
 * @param {*} param
 */
export const MainProvider = ({ children }) => {
  const routes = [
    {
      path: '/docs/introduction',
      title: 'Introduction',
      hasChildren: [
        {
          path: '/docs/introduction/getting-started',
          title: 'Getting Started',
        },
        {
          path: '/docs/introduction/requirements',
          title: 'Requirements',
        },
      ],
    },
    {
      path: '/docs/fundamentals',
      title: 'Fundamentals',
      sortChildren: true,
      hasChildren: [
        {
          path: '/docs/fundamentals/color-themes',
          title: 'Color Themes',
        },
        {
          path: '/docs/fundamentals/typography',
          title: 'Typography',
        },
      ],
    },
    {
      path: '/docs/elements',
      title: 'Elements',
      sortChildren: true,
      hasChildren: [
        {
          path: '/docs/components/buttons',
          title: 'Buttons',
        },
        {
          path: '/docs/components/inputs',
          title: 'Inputs',
        },

        {
          path: '/docs/components/icons',
          title: 'Icons',
        },
      ],
    },
    {
      path: '/docs/components',
      title: 'Components',
      sortChildren: true,
      hasChildren: [
        {
          path: '/docs/components/form',
          title: 'Form',
        },
        {
          path: '/docs/components/navbar',
          title: 'Navbar',
        },
        {
          path: '/docs/components/card',
          title: 'Card',
        },
        {
          path: '/docs/components/table',
          title: 'Table',
        },
      ],
    },
    {
      path: '/docs/utilities',
      title: 'Utilities',
      sortChildren: true,
      hasChildren: [
        {
          path: '/docs/utilities/spacing',
          title: 'Spacing',
        },
        {
          path: '/docs/utilities/flexbox',
          title: 'Flexbox',
        },
      ],
    },
  ];

  const _sortSubroutes = () => {
    return routes.map(route => {
      const { hasChildren, sortChildren } = route;

      if (hasChildren) {
        const subroutes = hasChildren;

        if (sortChildren) {
          subroutes.sort((a, b) => {
            return a.title.localeCompare(b.title);
          });

          return subroutes;
        }
      }

      return route;
    });
  };

  _sortSubroutes();

  // prettier-ignore
  return (
    <MainContext.Provider value={{ routes }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
