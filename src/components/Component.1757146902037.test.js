import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757146898581';

describe("<Component.1757146898581>", () => {
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the provided text prop', () => {
    const text = 'Hello, world!';
    render(<Component text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders a button with the correct text', () => {
    const buttonText = 'Click Me';
    render(<Component buttonText={buttonText} />);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('calls the onClick prop when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct class name', () => {
      const className = 'custom-class';
      render(<Component className={className} />);
      expect(screen.getByRole('button')).toHaveClass(className);
  });

  it('renders the default button text when buttonText prop is not provided', () => {
    render(<Component />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});