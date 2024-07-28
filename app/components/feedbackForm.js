import React, { useState } from 'react';

function FeedbackForm({ onSubmit }) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
    setFeedback('');
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter your feedback"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
