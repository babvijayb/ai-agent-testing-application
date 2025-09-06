import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757146895357';

describe("<Component>", () => {
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the provided text prop', () => {
    const text = "Hello, World!";
    render(<Component text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders a default text when no text prop is provided', () => {
    render(<Component />);
    expect(screen.getByText(/Default Text/i)).toBeInTheDocument();
  });
});