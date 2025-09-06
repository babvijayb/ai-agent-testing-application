import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component1757146856234 from './Component.1757146856234';

describe("<Component1757146856234>", () => {
  it('renders without crashing', () => {
    render(<Component1757146856234 />);
  });

  it('renders the provided text prop', () => {
    const text = 'Hello, Component!';
    render(<Component1757146856234 text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders a default text if no prop is provided', () => {
      render(<Component1757146856234 />);
      expect(screen.getByText(/default text/i)).toBeInTheDocument();
  });


  it('calls the onClick handler when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<Component1757146856234 onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the button with the correct label', () => {
      render(<Component1757146856234 buttonText="Click Me" />);
      expect(screen.getByRole('button', { name: /Click Me/i })).toBeInTheDocument();
  });


});