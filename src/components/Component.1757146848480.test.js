import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757146844208.test.js';

describe("<Component>")
{
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the provided text prop', () => {
    const testText = "Hello, Component!";
    render(<Component text={testText} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('renders default text when no text prop is provided', () => {
    render(<Component />);
    expect(screen.getByText("Default Text")).toBeInTheDocument();
  });

  it('calls the onClick prop when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Component onClick={onClickMock} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders a button with the correct text', () => {
    render(<Component buttonText="Click Me" />);
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
  });

  it('renders a button with default button text when no buttonText prop is provided', () => {
    render(<Component />);
    expect(screen.getByRole('button', { name: 'Click' })).toBeInTheDocument();
  });
}