import React from 'react';
import logo from '../Logo/Logo__1.png';
import './logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo" className="logo-img" />
    </div>
  );
};

export default Logo;
