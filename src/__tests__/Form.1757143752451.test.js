import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

describe('<Form>', () => {
  it('renders without crashing', () => {
    render(<Form />);
  });

  it('renders the form with initial values', () => {
    render(<Form initialValues={{ name: 'John Doe', email: 'john.doe@example.com' }} />);
    expect(screen.getByLabelText('Name')).toHaveValue('John Doe');
    expect(screen.getByLabelText('Email')).toHaveValue('john.doe@example.com');
  });

  it('updates input values on change', () => {
    render(<Form />);
    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    expect(nameInput).toHaveValue('Jane Doe');
  });

  it('calls onSubmit with form data on submit', () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} />);
    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({
      name: 'Test Name',
    }));
  });

  it('renders with default values if initialValues is not provided', () => {
    render(<Form />);
    expect(screen.getByLabelText('Name')).toHaveValue('');
    expect(screen.getByLabelText('Email')).toHaveValue('');
  });

  it('disables submit button when form is submitting', () => {
      const handleSubmit = jest.fn().mockImplementation(() => {
          return new Promise((resolve) => {
            // Simulate an async operation
            setTimeout(resolve, 100);
          });
      });
      render(<Form onSubmit={handleSubmit} />);
      const submitButton = screen.getByText('Submit');
      fireEvent.click(submitButton);

      expect(submitButton).toBeDisabled();

  });

  it('calls onSubmit with the correct data when submitting', async () => {
        const handleSubmit = jest.fn();
        render(<Form onSubmit={handleSubmit} />);

        const nameInput = screen.getByLabelText('Name');
        fireEvent.change(nameInput, { target: { value: 'Test Name' } });
        const emailInput = screen.getByLabelText('Email');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);

        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({
            name: 'Test Name',
            email: 'test@example.com',
        }));
    });
});