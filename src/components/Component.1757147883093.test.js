import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147875158';

describe("<Component>", () => {
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the provided text prop', () => {
    const testText = "Hello, Component!";
    render(<Component text={testText} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('renders with default text when no text prop is provided', () => {
    render(<Component />);
    expect(screen.getByText("Default Text")).toBeInTheDocument();
  });

  it('calls the onClick function when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders the button with the provided buttonText prop', () => {
    const buttonText = "Click Me!";
    render(<Component buttonText={buttonText} />);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('renders the button with default button text if no prop is given', () => {
      render(<Component/>);
      expect(screen.getByRole('button')).toHaveTextContent('Click Me');
  })
});