import React, { useState } from 'react';
import * as Yup from 'yup'; // For validation
import { useFormik } from 'formik'; // For form management (optional, but recommended)

// Define a validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

function SampleForm() {
  // State for submission status and success/error messages
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setSubmissionStatus(null); // Reset submission status on new submit
      try {
        // Simulate an API call (replace with your actual API call)
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 1-second delay

        // Successful submission
        console.log('Form data submitted:', values);
        setSubmissionStatus({ type: 'success', message: 'Form submitted successfully!' });
        resetForm(); // Clear the form after successful submission
      } catch (error) {
        // Error during submission
        console.error('Submission error:', error);
        setSubmissionStatus({ type: 'error', message: 'An error occurred during submission. Please try again.' });
      }
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <fieldset>
        <legend>Contact Form</legend>

        {/* Name Input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            aria-label="Your Name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            aria-label="Your Email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            aria-label="Your Message"
          />
          {formik.touched.message && formik.errors.message ? (
            <div style={{ color: 'red' }}>{formik.errors.message}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {/* Submission Status Message */}
        {submissionStatus && (
          <div style={{ color: submissionStatus.type === 'success' ? 'green' : 'red', marginTop: '10px' }}>
            {submissionStatus.message}
          </div>
        )}
      </fieldset>
    </form>
  );
}

export default SampleForm;