import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147877812';

describe("<Component.1757147877812>") {
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the provided text prop', () => {
    const text = 'Hello, Component!';
    render(<Component text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders with default props if none are provided', () => {
      render(<Component />);
      expect(screen.getByText(/Default Text/i)).toBeInTheDocument();
  });

  it('calls the onClick handler when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the provided children', () => {
    render(<Component><span>Child Component</span></Component>);
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
}