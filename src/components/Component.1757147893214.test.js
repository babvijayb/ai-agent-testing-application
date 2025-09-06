import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147883093.test';

describe("<Component>")
{
  it('renders without crashing', () => {
    render(<Component />);
    expect(screen.getByText(/Component/i)).toBeInTheDocument();
  });

  it('renders the correct text content', () => {
    render(<Component />);
    expect(screen.getByText(/Component/i)).toBeInTheDocument();
  });

  it('renders with a button', () => {
    render(<Component />);
    expect(screen.getByRole('button', { name: /Click me/i })).toBeInTheDocument();
  });

  it('button click updates the text content', () => {
    render(<Component />);
    const button = screen.getByRole('button', { name: /Click me/i });
    fireEvent.click(button);
    expect(screen.getByText(/Clicked/i)).toBeInTheDocument();
  });
}