import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757146880645.test.js';

describe("<Component>")
{
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('displays the correct initial text', () => {
    render(<Component />);
    expect(screen.getByText(/Component/i)).toBeInTheDocument();
  });

  it('simulates a button click and verifies state change', () => {
    render(<Component />);
    const buttonElement = screen.getByRole('button', { name: /Click me/i });
    fireEvent.click(buttonElement);
    expect(screen.getByText(/Clicked/i)).toBeInTheDocument();
  });
}