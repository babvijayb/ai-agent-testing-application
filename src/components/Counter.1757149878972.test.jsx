import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';
import { vi } from 'vitest';

describe('<Counter>', () => {
  it('renders without crashing', () => {
    render(<Counter />);
  });

  it('renders the counter value initially at 0', () => {
    render(<Counter />);
    const countElement = screen.getByText(/Count: 0/i);
    expect(countElement).toBeInTheDocument();
  });


  it('renders the increment button', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    expect(incrementButton).toBeInTheDocument();
  });

  it('renders the decrement button', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('-');
    expect(decrementButton).toBeInTheDocument();
  });

  it('increments the counter when the increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    const countElement = screen.getByText(/Count: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  it('decrements the counter when the decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    const countElement = screen.getByText(/Count: -1/i);
    expect(countElement).toBeInTheDocument();
  });

  it('calls the onIncrement prop when the increment button is clicked and the prop is provided', () => {
    const onIncrementMock = vi.fn();
    render(<Counter onIncrement={onIncrementMock} />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    expect(onIncrementMock).toHaveBeenCalledTimes(1);
  });

  it('calls the onDecrement prop when the decrement button is clicked and the prop is provided', () => {
    const onDecrementMock = vi.fn();
    render(<Counter onDecrement={onDecrementMock} />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    expect(onDecrementMock).toHaveBeenCalledTimes(1);
  });
});