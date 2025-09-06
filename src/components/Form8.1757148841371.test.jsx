import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form8 from './Form8';

describe("<Form8>", () => {
  it('renders without crashing', () => {
    render(<Form8 />);
  });

  it('renders the form with correct initial values', () => {
    render(<Form8 />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('updates the name input value correctly', () => {
    render(<Form8 />);
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    expect(nameInput.value).toBe('Test Name');
  });

  it('updates the email input value correctly', () => {
    render(<Form8 />);
    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  it('calls onSubmit when the form is submitted', () => {
    const handleSubmit = jest.fn();
    render(<Form8 onSubmit={handleSubmit} />);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalled();
  });
});