// src/pages/ReviewForm.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { submitReview } from '../services/api';

const ReviewForm = () => {
  const { id } = useParams();
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitReview(id, { review, rating });
      setStatus('succeeded');
    } catch (error) {
      setStatus('failed');
    }
  };

  if (status === 'loading') return <p>Submitting review...</p>;
  if (status === 'succeeded') return <p>Review submitted successfully!</p>;
  if (status === 'failed') return <p>Error submitting review.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
