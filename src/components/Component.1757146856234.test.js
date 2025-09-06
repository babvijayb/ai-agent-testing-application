import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component1757146851861 from './Component.1757146851861.test';

describe("<Component1757146851861>", () => {
  it('renders without crashing', () => {
    render(<Component1757146851861 />);
  });

  it('renders the provided text prop', () => {
    const testText = "Hello, Component!";
    render(<Component1757146851861 text={testText} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('renders with default text when no text prop is provided', () => {
    render(<Component1757146851861 />);
    expect(screen.getByText(/Default Text/i)).toBeInTheDocument();
  });

  it('calls the onClick prop when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<Component1757146851861 onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders a button with the provided buttonText prop', () => {
      const buttonText = "Click Me";
      render(<Component1757146851861 buttonText={buttonText} />);
      expect(screen.getByRole('button')).toHaveTextContent(buttonText);
  });

  it('renders the default button text when no buttonText prop is provided', () => {
      render(<Component1757146851861 />);
      expect(screen.getByRole('button')).toHaveTextContent(/Click here/i);
  });
});