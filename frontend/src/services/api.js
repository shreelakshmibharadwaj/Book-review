// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

export const fetchBooks = () => API.get('/books');
export const fetchBookDetails = (id) => API.get(`/books/${id}`);
export const fetchUserProfile = () => API.get('/user/profile');
export const submitReview = (bookId, reviewData) =>
  API.post(`/books/${bookId}/reviews`, reviewData);

export default API;
