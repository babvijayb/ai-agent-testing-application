import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757147878181';

describe("<Component>", () => {
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the correct text content', () => {
    render(<Component />);
    expect(screen.getByText(/This is a component/i)).toBeInTheDocument();
  });

  it('renders with default props', () => {
    render(<Component />);
    expect(screen.getByText(/Default Prop Value/i)).toBeInTheDocument();
  });


  it('renders with provided props', () => {
      const testProp = "Test Prop Value";
      render(<Component prop1={testProp} />);
      expect(screen.getByText(testProp)).toBeInTheDocument();
  });

    it('handles button click and updates state', () => {
        render(<Component />);
        const buttonElement = screen.getByRole('button', { name: /Click Me/i });
        fireEvent.click(buttonElement);
        expect(screen.getByText(/Clicked/i)).toBeInTheDocument();
    });

});