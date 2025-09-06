import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147882291';

describe("<Component>") => {
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the initial text "Hello, World!"', () => {
    render(<Component />);
    const textElement = screen.getByText(/Hello, World!/i);
    expect(textElement).toBeInTheDocument();
  });

  it('renders the button with the text "Click me"', () => {
    render(<Component />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('updates the text on button click', () => {
    render(<Component />);
    const buttonElement = screen.getByText(/Click me/i);
    fireEvent.click(buttonElement);
    const updatedTextElement = screen.getByText(/Clicked!/i);
    expect(updatedTextElement).toBeInTheDocument();
  });

  it('renders the initial text "Hello, World!" when the button is clicked twice', () => {
    render(<Component />);
    const buttonElement = screen.getByText(/Click me/i);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    const initialTextElement = screen.getByText(/Hello, World!/i);
    expect(initialTextElement).toBeInTheDocument();
  });
};