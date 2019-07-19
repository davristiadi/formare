import React, { useState, useEffect } from 'react';

export const MainContext = React.createContext({});

export const MainProvider = ({ children }) => {
  const [routes] = useState([
    {
      path: '/docs/getting-started',
      title: 'Getting Started',
    },
    {
      path: '/docs/quick-start',
      title: 'Quick Start',
    },
    {
      path: '/docs/components',
      title: 'Components',
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
