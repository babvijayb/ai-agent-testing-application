import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757146873234';

describe("<Component>", () => {
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the provided text prop', () => {
    const text = "Hello, world!";
    render(<Component text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders a button with the provided buttonText prop', () => {
    const buttonText = "Click me";
    render(<Component buttonText={buttonText} />);
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it('calls the onClick prop when the button is clicked', () => {
    const handleClick = jest.fn();
    const buttonText = "Click me";
    render(<Component buttonText={buttonText} onClick={handleClick} />);
    const button = screen.getByText(buttonText);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders a default text when no text prop is provided', () => {
    render(<Component />);
    expect(screen.getByText("Default Text")).toBeInTheDocument();
  });

  it('renders a default button text when no buttonText prop is provided', () => {
      render(<Component />);
      expect(screen.getByText("Click")).toBeInTheDocument();
  });
});