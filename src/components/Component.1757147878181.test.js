import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147874254';

describe("<Component>") {
  it('renders without crashing', () => {
    render(<Component />);
    expect(screen.getByText(/Component/i)).toBeInTheDocument();
  });

  it('renders with default text', () => {
    render(<Component />);
    expect(screen.getByText(/default text/i)).toBeInTheDocument();
  });

  it('renders with provided text prop', () => {
    const testText = 'Hello, World!';
    render(<Component text={testText} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('calls onClick prop when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Click Me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}