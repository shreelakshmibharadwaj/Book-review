// src/components/BookCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div>
    <h2>{book.title}</h2>
    <p>{book.author}</p>
    <Link to={`/books/${book.id}`}>Details</Link>
  </div>
);

export default BookCard;
