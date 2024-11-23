// src/pages/BookDetailPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookDetails } from '../redux/bookSlice';
import { useParams } from 'react-router-dom';

const BookDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedBook } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBookDetails(id));
  }, [dispatch, id]);

  if (!selectedBook) return <p>Loading book details...</p>;

  return (
    <div>
      <h1>{selectedBook.title}</h1>
      <p>{selectedBook.author}</p>
      <p>{selectedBook.description}</p>
    </div>
  );
};

export default BookDetailPage;
