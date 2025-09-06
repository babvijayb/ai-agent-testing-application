import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147877349';

describe("<Component.1757147877349>", () => {
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the provided text prop', () => {
    const text = 'Hello, Component!';
    render(<Component text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders a button with the provided buttonText prop', () => {
    const buttonText = 'Click Me';
    render(<Component buttonText={buttonText} />);
    expect(screen.getByRole('button', { name: buttonText })).toBeInTheDocument();
  });

  it('calls the onClick prop when the button is clicked', () => {
    const handleClick = jest.fn();
    const buttonText = 'Click Me';
    render(<Component buttonText={buttonText} onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: buttonText }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with default props when props are not provided', () => {
    render(<Component />);
    expect(screen.getByText('Default Text')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Default Button' })).toBeInTheDocument();
  });
});