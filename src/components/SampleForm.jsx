import React, { useState } from 'react';

const SampleForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // For validation errors
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // **Validation (Example)**  -  Can be expanded with a validation library.
    if (!inputValue.trim()) {
      setErrorMessage('Input is required.');
      setSubmissionStatus('error');
      return;
    }

    // Reset error message if there's an input
    setErrorMessage('');

    // **Simulate Form Submission (replace with actual API call)**
    setTimeout(() => {
      // Simulate a successful submission
      if (Math.random() > 0.1) { // 90% success rate
        setSubmissionStatus('success');
      } else {
        // Simulate a server error
        setSubmissionStatus('error');
        setErrorMessage('Form submission failed. Please try again.');
      }
    }, 1500); // Simulate some network latency
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '400px' }}>
      <label htmlFor="sampleInput" style={{ display: 'block', marginBottom: '5px' }}>
        Enter Value:
      </label>
      <input
        type="text"
        id="sampleInput"
        value={inputValue}
        onChange={handleInputChange}
        style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
      />

      {errorMessage && (
        <p style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</p>
      )}

      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Submit
      </button>

      {submissionStatus === 'success' && (
        <p style={{ color: 'green', marginTop: '10px' }}>Form submitted successfully!</p>
      )}
      {submissionStatus === 'error' && (
        <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage || 'An error occurred during submission.'}</p>
      )}
    </form>
  );
};

export default SampleForm;