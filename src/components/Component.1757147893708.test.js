import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147883441';

describe("<Component>")
{
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the provided text prop correctly', () => {
    const text = "Hello, Component!";
    render(<Component text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders with default text if no text prop is provided', () => {
    render(<Component />);
    expect(screen.getByText("Default Text")).toBeInTheDocument();
  });

  it('calls the onClick handler when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders a button with the provided buttonText prop', () => {
      const buttonText = "Click Me";
      render(<Component buttonText={buttonText} />);
      expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
}