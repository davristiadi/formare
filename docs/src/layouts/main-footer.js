import React from 'react';

const MainFooter = () => {
  return (
    <footer className="MainFooter">
      <div className="Container">
        © {new Date().getFullYear()}, Built with love.. and lots of coffee.
      </div>
    </footer>
  );
};

export default MainFooter;
