import React, { Component, Fragment } from 'react';
import { MainHeader, MainContent } from '.';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <MainContent />
      </>
    );
  }
}

export default Main;