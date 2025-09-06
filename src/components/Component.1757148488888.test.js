import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form7 from './Form7.jsx';

describe("<Form7>", () => {
  it('renders without crashing', () => {
    render(<Form7 />);
  });

  it('renders the form with the correct initial content', () => {
    render(<Form7 />);
    expect(screen.getByText(/Form 7/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Input 1:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Input 2:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('updates input values correctly', () => {
    render(<Form7 />);
    const input1 = screen.getByLabelText(/Input 1:/i);
    const input2 = screen.getByLabelText(/Input 2:/i);

    fireEvent.change(input1, { target: { value: 'test1' } });
    fireEvent.change(input2, { target: { value: 'test2' } });

    expect(input1.value).toBe('test1');
    expect(input2.value).toBe('test2');
  });

  it('calls the onSubmit function with correct values on form submission', () => {
    const handleSubmit = jest.fn();
    render(<Form7 onSubmit={handleSubmit} />);
    const input1 = screen.getByLabelText(/Input 1:/i);
    const input2 = screen.getByLabelText(/Input 2:/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.change(input1, { target: { value: 'test1' } });
    fireEvent.change(input2, { target: { value: 'test2' } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({input1: 'test1', input2: 'test2'}));
  });

  it('disables the submit button initially and re-enables on input change', () => {
      render(<Form7 />);
      const submitButton = screen.getByRole('button', { name: /Submit/i });
      expect(submitButton).toBeDisabled();
      const input1 = screen.getByLabelText(/Input 1:/i);
      fireEvent.change(input1, { target: { value: 'test' } });
      expect(submitButton).toBeEnabled();
  });
});