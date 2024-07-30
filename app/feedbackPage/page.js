"use client"; 

import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit feedback goes here
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Feedback and Suggestions</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback..."
            rows="5"
            cols="50"
          />
          <br />
          <button type="submit">Submit Feedback</button>
        </form>
      ) : (
        <p>Thank you for your feedback!</p>
      )}
    </div>
  );
};

export default Feedback;
