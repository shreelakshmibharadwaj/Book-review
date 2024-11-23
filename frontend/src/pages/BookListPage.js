import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/bookSlice';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

const BookListPage = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.books);
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  useEffect(() => {
    setFilteredBooks(
      list.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, list]);

  if (status === 'loading') return <p>Loading books...</p>;
  if (status === 'failed') return <p>Error loading books.</p>;

  return (
    <div>
      <h1>Book List</h1>
      <SearchBar
        placeholder="Search books by title..."
        value={search}
        onChange={setSearch}
      />
      <div>
        {filteredBooks.length ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookListPage;
