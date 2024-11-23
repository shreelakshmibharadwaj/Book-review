// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookDetailPage from './pages/BookDetailPage';
import UserProfilePage from './pages/UserProfilePage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/books" element={<BookListPage />} />
    <Route path="/books/:id" element={<BookDetailPage />} />
    <Route path="/profile" element={<UserProfilePage />} />
  </Routes>
);

export default AppRoutes;
