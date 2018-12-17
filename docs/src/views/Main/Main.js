import React, { Component } from 'react';
import { MainHeader, MainContent } from '.';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <MainHeader />
        <MainContent />
      </div>
    );
  }
}

export default Main;