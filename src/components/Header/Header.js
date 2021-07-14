// imports
import React from 'react';

// styles
import './Header.css';

const Header = ({ title }) => {
  return (
    <div className="header-container">
      <h1 className="header">{title}</h1>
    </div>
  );
};

export default Header;
