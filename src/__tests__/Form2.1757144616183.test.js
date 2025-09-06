import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form2 from './Form2';

describe('<Form2>', () => {
  it('renders without errors', () => {
    render(<Form2 />);
    expect(screen.getByText(/form 2/i)).toBeInTheDocument();
  });

  it('renders with initial values', () => {
    const initialValues = {
      name: 'test name',
      email: 'test@example.com',
      message: 'test message',
    };
    render(<Form2 initialValues={initialValues} />);

    expect(screen.getByLabelText(/name/i).value).toBe(initialValues.name);
    expect(screen.getByLabelText(/email/i).value).toBe(initialValues.email);
    expect(screen.getByLabelText(/message/i).value).toBe(initialValues.message);
  });


  it('updates input values on change', () => {
    render(<Form2 />);
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'new name' } });
    expect(nameInput.value).toBe('new name');

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'new@example.com' } });
    expect(emailInput.value).toBe('new@example.com');

    const messageInput = screen.getByLabelText(/message/i);
    fireEvent.change(messageInput, { target: { value: 'new message' } });
    expect(messageInput.value).toBe('new message');
  });


  it('calls onSubmit with form data on submit', () => {
    const handleSubmit = jest.fn();
    const initialValues = {
      name: 'test name',
      email: 'test@example.com',
      message: 'test message',
    };
    render(<Form2 initialValues={initialValues} onSubmit={handleSubmit} />);
    fireEvent.click(screen.getByText(/submit/i));
    expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({
        name: 'test name',
        email: 'test@example.com',
        message: 'test message',
      })
    );
  });
});