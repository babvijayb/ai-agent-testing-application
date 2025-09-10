import React, { useState } from 'react';

// Consider renaming the file and component if this form is specific to a certain use case.
// e.g., UserRegistrationForm.jsx, ContactForm.jsx

const SampleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'loading', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmissionStatus('loading'); // Set loading state

    try {
      // Simulate a delay for demonstration purposes.  Remove in production.
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Perform the form submission
      const response = await fetch('/api/submit-form', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Handle successful submission
      // const data = await response.json(); // If the API returns data, process it here
      setSubmissionStatus('success');
      // Optionally, clear the form after successful submission
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error'); // Set error state
      // Optionally, log the error details or display a more detailed message to the user.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required // Add required attribute for basic validation
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />
      </div>

      <button type="submit" disabled={submissionStatus === 'loading'}>
        {submissionStatus === 'loading' ? 'Submitting...' : 'Submit'}
      </button>

      {submissionStatus === 'success' && (
        <p style={{ color: 'green' }}>Form submitted successfully!</p>
      )}

      {submissionStatus === 'error' && (
        <p style={{ color: 'red' }}>
          An error occurred while submitting the form. Please try again.
        </p>
      )}
    </form>
  );
};

export default SampleForm;