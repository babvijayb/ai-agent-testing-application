import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component1757147877812 from './Component.1757147877812';

describe("<Component1757147877812>", () => {
  it('renders without crashing', () => {
    render(<Component1757147877812 />);
  });

  it('renders the provided text prop', () => {
    const text = "Hello, Component!";
    render(<Component1757147877812 text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders a button with the provided buttonText', () => {
    const buttonText = "Click Me";
    render(<Component1757147877812 buttonText={buttonText} />);
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it('calls the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    const buttonText = "Click Me";
    render(<Component1757147877812 buttonText={buttonText} onClick={onClickMock} />);
    const button = screen.getByText(buttonText);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders the default text if no text prop is provided', () => {
      render(<Component1757147877812 />);
      expect(screen.getByText(/default text/i)).toBeInTheDocument();
  });
});