import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757146840444';

describe("<Component.1757146840444>") {
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the initial text', () => {
    render(<Component />);
    expect(screen.getByText(/Initial Text/i)).toBeInTheDocument();
  });

  it('updates text on button click', () => {
    render(<Component />);
    const button = screen.getByRole('button', { name: /Click Me/i });
    fireEvent.click(button);
    expect(screen.getByText(/Text Updated/i)).toBeInTheDocument();
  });

  it('renders with provided props', () => {
    const testProp = "Test Prop Value";
    render(<Component propText={testProp} />);
    expect(screen.getByText(new RegExp(testProp, 'i'))).toBeInTheDocument();
  });

  it('button is enabled initially', () => {
        render(<Component />);
        const button = screen.getByRole('button', { name: /Click Me/i });
        expect(button).toBeEnabled();
    });
}