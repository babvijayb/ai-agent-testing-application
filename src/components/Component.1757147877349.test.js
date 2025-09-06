import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147873890.test.js';

describe("<Component>")
{
  it("renders without crashing", () => {
    render(<Component />);
  });

  it("renders the correct text", () => {
    render(<Component />);
    const element = screen.getByText(/Component/i);
    expect(element).toBeInTheDocument();
  });

  it("renders the correct text when props are passed", () => {
    const testText = "Test Text";
    render(<Component text={testText} />);
    const element = screen.getByText(testText);
    expect(element).toBeInTheDocument();
  });

  it("calls the onClick handler when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
}