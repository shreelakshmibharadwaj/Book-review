// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h3>BookStore</h3>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
