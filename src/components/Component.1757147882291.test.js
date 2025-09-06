import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147874254.test';

describe("<Component>") {
  it("renders without crashing", () => {
    render(<Component />);
  });

  it("renders the correct initial text", () => {
    render(<Component />);
    expect(screen.getByText(/Hello, world!/i)).toBeInTheDocument();
  });

  it("renders the correct initial text with a prop", () => {
    render(<Component name="Test" />);
    expect(screen.getByText(/Hello, Test!/i)).toBeInTheDocument();
  });

  it("updates text when button is clicked", () => {
    render(<Component />);
    const buttonElement = screen.getByText(/Click me/i);
    fireEvent.click(buttonElement);
    expect(screen.getByText(/Button clicked/i)).toBeInTheDocument();
  });
}