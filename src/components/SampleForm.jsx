import React, { useState } from 'react';

const SampleForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission (replace with your actual submission logic)
      console.log('Form submitted with data:', formData);
      alert('Form submitted successfully!'); // User feedback
      // Optionally, reset the form after submission:
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
      setErrors({});
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Contact Us</h2>

      <div>
        <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          style={{ width: '100%', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        {errors.firstName && <div style={{ color: 'red', fontSize: '0.8em' }}>{errors.firstName}</div>}
      </div>

      <div>
        <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          style={{ width: '100%', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        {errors.lastName && <div style={{ color: 'red', fontSize: '0.8em' }}>{errors.lastName}</div>}
      </div>

      <div>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          style={{ width: '100%', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        {errors.email && <div style={{ color: 'red', fontSize: '0.8em' }}>{errors.email}</div>}
      </div>

      <div>
        <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          style={{ width: '100%', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }} // Allow vertical resizing
        />
        {errors.message && <div style={{ color: 'red', fontSize: '0.8em' }}>{errors.message}</div>}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1em',
          marginTop: '10px',
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default SampleForm;