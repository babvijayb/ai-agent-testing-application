import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter'; // Assuming Counter.js is in the same directory

describe('Counter Component', () => {
  it('renders the initial count correctly', () => {
    render(<Counter />);
    const countElement = screen.getByText(/You clicked 0 times/i);
    expect(countElement).toBeInTheDocument();
  });

  it('increments the count when the increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    const countElement = screen.getByText(/You clicked 1 times/i);
    expect(countElement).toBeInTheDocument();
  });

  it('decrements the count when the decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    const countElement = screen.getByText(/You clicked -1 times/i);
    expect(countElement).toBeInTheDocument();
  });

  it('increments and then decrements the count correctly', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    const countElement = screen.getByText(/You clicked 0 times/i);
    expect(countElement).toBeInTheDocument();
  });

  it('allows multiple increments', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const countElement = screen.getByText(/You clicked 3 times/i);
    expect(countElement).toBeInTheDocument();
  });
});