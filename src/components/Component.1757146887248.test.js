import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757146883347';

describe("<Component.1757146883347>")
{
  it('renders without crashing', () => {
    render(<Component />);
  });

  it('renders the provided title', () => {
    const title = "Test Title";
    render(<Component title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders the provided description', () => {
    const description = "Test Description";
    render(<Component description={description} />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('renders with default values if props are not provided', () => {
    render(<Component />);
    expect(screen.getByText("Default Title")).toBeInTheDocument();
    expect(screen.getByText("Default Description")).toBeInTheDocument();
  });

  it('calls the onClick handler when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

    it('renders a button with the default text', () => {
        render(<Component />);
        expect(screen.getByRole('button')).toHaveTextContent('Click Me!');
    });

    it('renders a button with the custom text', () => {
        const buttonText = "Custom Button";
        render(<Component buttonText={buttonText} />);
        expect(screen.getByRole('button')).toHaveTextContent(buttonText);
    });
}