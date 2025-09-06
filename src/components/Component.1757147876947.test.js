import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147873071';

describe("<Component>") => {
  it('should render without crashing', () => {
    render(<Component />);
  });

  it('should display the correct text', () => {
    render(<Component text="Hello, World!" />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('should display default text when no text prop is passed', () => {
    render(<Component />);
    expect(screen.getByText('Default Text')).toBeInTheDocument();
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render a button with the correct text', () => {
      render(<Component buttonText="Click Me" />);
      expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

    it('should render a button with default text if no buttonText prop is passed', () => {
        render(<Component />);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });
}