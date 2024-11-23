// src/components/ErrorHandler.js
import React from 'react';

const ErrorHandler = ({ error }) => (
  <div>
    <h2>Error</h2>
    <p>{error || 'Something went wrong. Please try again later.'}</p>
  </div>
);

export default ErrorHandler;
