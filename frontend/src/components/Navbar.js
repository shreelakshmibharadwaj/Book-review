// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/books">Books</Link>
    <Link to="/profile">Profile</Link>
  </nav>
);

export default Navbar;
