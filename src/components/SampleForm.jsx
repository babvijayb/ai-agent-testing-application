import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const SampleForm = ({ labelText, placeholderText, onSubmit }) => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!onSubmit) {
      console.error("onSubmit prop is missing for SampleForm.");
      return; // Or display an error message to the user
    }

    const inputValue = inputRef.current.value;

    if (!inputValue) {
      alert("Please enter a value."); // Example of basic client-side validation
      return;
    }

    onSubmit(inputValue);
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput">{labelText}</label>
      <input
        type="text"
        id="nameInput"
        ref={inputRef}
        placeholder={placeholderText}
        required // Example of HTML5 validation
      />
      <button type="submit">Submit</button>
    </form>
  );
};

SampleForm.propTypes = {
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SampleForm;