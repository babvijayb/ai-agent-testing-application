import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757146863978.test.js';

describe("<Component>", () => {
  it('should render without crashing', () => {
    render(<Component />);
    expect(screen.getByText(/Component/i)).toBeInTheDocument();
  });

  it('should display the provided text prop', () => {
    const text = "Hello, World!";
    render(<Component text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should handle button click and update state', () => {
    render(<Component />);
    const buttonElement = screen.getByRole('button', { name: /Click me/i });
    fireEvent.click(buttonElement);
    expect(screen.getByText(/Clicked: 1/i)).toBeInTheDocument();
  });

    it('should have a default text if no text prop is passed', () => {
        render(<Component />);
        expect(screen.getByText(/Component/i)).toBeInTheDocument();
    });

    it('should render with the default state of 0', () => {
        render(<Component />);
        expect(screen.getByText(/Clicked: 0/i)).toBeInTheDocument();
    });

    it('should increment the count when the button is clicked multiple times', () => {
        render(<Component />);
        const buttonElement = screen.getByRole('button', { name: /Click me/i });
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        expect(screen.getByText(/Clicked: 2/i)).toBeInTheDocument();
    });
});