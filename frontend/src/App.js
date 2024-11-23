import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import UserProfilePage from './pages/UserProfilePage';
import NavigationBar from './components/NavigationBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BookListPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
