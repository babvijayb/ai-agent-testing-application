import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147873890';

describe("<Component>", () => {
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the provided text prop', () => {
    const testText = 'Hello, world!';
    render(<Component text={testText} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('renders with default text if no text prop is provided', () => {
    render(<Component />);
    expect(screen.getByText(/default text/i)).toBeInTheDocument();
  });

  it('calls the onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders a button with the correct label', () => {
    const buttonText = 'Click me';
    render(<Component buttonText={buttonText} />);
    expect(screen.getByRole('button', { name: buttonText })).toBeInTheDocument();
  });
});