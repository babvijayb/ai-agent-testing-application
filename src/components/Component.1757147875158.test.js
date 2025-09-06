import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component1757147867020 from './Component.1757147867020';

describe("<Component1757147867020>", () => {
  it('renders without crashing', () => {
    render(<Component1757147867020 />);
  });

  it('renders the provided text prop', () => {
    const text = 'Hello, World!';
    render(<Component1757147867020 text={text} />);
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  it('calls the onClick handler when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<Component1757147867020 onClick={handleClick} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders a default button text if buttonText prop is not provided', () => {
    render(<Component1757147867020 />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Click me');
  });

  it('renders the button text prop', () => {
    const buttonText = 'Custom Button';
    render(<Component1757147867020 buttonText={buttonText} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent(buttonText);
  });
});