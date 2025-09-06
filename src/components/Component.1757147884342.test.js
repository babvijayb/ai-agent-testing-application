import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147876947';

describe("<Component>") => {
  it('renders without errors', () => {
    render(<Component />);
    expect(screen.getByText(/Component/i)).toBeInTheDocument();
  });

  it('renders with default props', () => {
    render(<Component />);
    expect(screen.getByText(/default/i)).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    render(<Component text="custom text" />);
    expect(screen.getByText(/custom text/i)).toBeInTheDocument();
  });

  it('simulates a button click', () => {
    render(<Component />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(screen.getByText(/clicked/i)).toBeInTheDocument();
  });
});