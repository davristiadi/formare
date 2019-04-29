import React from 'react';
import { default as Routes } from './MainRoutes';
import { default as Header } from './MainHeader';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Routes />
    </div>
  );
};

export default Main;
