import React, { Component, Fragment } from 'react';
import { MainHeader, MainContent } from '.';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <MainHeader />
        <MainContent />
      </Fragment>
    );
  }
}

export default Main;