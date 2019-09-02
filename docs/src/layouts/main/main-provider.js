import React, { useState } from 'react';

export const MainContext = React.createContext({});

/**
 * @name MainProvider
 * @desc A Context wrapper to provide data used across pages and components globally.
 * @param {*} param
 */
export const MainProvider = ({ children }) => {
  const [routes] = useState([
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
          path: '/docs/fundamentals/themes',
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
          path: '/docs/elements/buttons',
          title: 'Buttons',
        },
        {
          path: '/docs/elements/inputs',
          title: 'Inputs',
        },
        // {
        //   path: '/docs/elements/icons',
        //   title: 'Icons',
        // },
        // {
        //   path: '/docs/elements/images',
        //   title: 'Images',
        // },
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
  ]);

  // prettier-ignore
  return (
    <MainContext.Provider value={{ routes }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
