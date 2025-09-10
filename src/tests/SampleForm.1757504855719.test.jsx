import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For more assertion helpers
import SampleForm from '../components/SampleForm'; // Adjust the path if needed

describe('SampleForm Component Tests', () => {

  it('should render the component', () => {
    render(<SampleForm />);
    const formElement = screen.getByRole('form'); // Assuming the form uses <form> tag
    expect(formElement).toBeInTheDocument();
  });

  it('should update the name input correctly', () => {
    render(<SampleForm />);
    const nameInput = screen.getByLabelText('Name:'); // Assuming there is a label "Name:"
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  });

  it('should update the email input correctly', () => {
    render(<SampleForm />);
    const emailInput = screen.getByLabelText('Email:'); // Assuming there is a label "Email:"
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    expect(emailInput.value).toBe('john.doe@example.com');
  });

  it('should update the message textarea correctly', () => {
    render(<SampleForm />);
    const messageTextarea = screen.getByLabelText('Message:'); // Assuming there is a label "Message:"
    fireEvent.change(messageTextarea, { target: { value: 'Hello, this is a test message.' } });
    expect(messageTextarea.value).toBe('Hello, this is a test message.');
  });

  it('should call the submit handler with the correct data when the form is submitted', async () => {
    const handleSubmit = jest.fn(); // Mock the submit handler
    render(<SampleForm onSubmit={handleSubmit} />);
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const messageTextarea = screen.getByLabelText('Message:');
    const submitButton = screen.getByRole('button', { name: 'Submit' }); // Assuming a button with text "Submit"

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'Test Message' } });
    fireEvent.click(submitButton);

    // Added await for async behavior
    await new Promise(resolve => setTimeout(resolve, 0)); // Allow for any state updates/callbacks to happen

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'Test Name',
      email: 'test@example.com',
      message: 'Test Message',
    });
  });
  // Example error handling test - requires knowing the form's validation
  it('should display an error message when the email is invalid', async () => {
    const handleSubmit = jest.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const emailInput = screen.getByLabelText('Email:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    // Assuming the form displays an error message with text content or ARIA label (adapt to form's implementation)
    const errorMessage = await screen.findByText(/Please enter a valid email/i); // or use ARIA attributes to get this element.
    expect(errorMessage).toBeInTheDocument();
  });

  // Example accessibility test - assumes labels exist
  it('should have accessible labels for all inputs', () => {
      render(<SampleForm />);
      const nameInput = screen.getByLabelText('Name:');
      const emailInput = screen.getByLabelText('Email:');
      const messageTextarea = screen.getByLabelText('Message:');

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(messageTextarea).toBeInTheDocument();
  });


});