import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form5 from './Form5.jsx';

describe("<Form5>", () => {
  it("should render without errors", () => {
    render(<Form5 />);
    const element = screen.getByText(/Form 5/i);
    expect(element).toBeInTheDocument();
  });

  it("should display initial values correctly when no props are passed", () => {
    render(<Form5 />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });

  it("should update input value on change", () => {
    render(<Form5 />);
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    expect(nameInput.value).toBe('Test Name');
  });

  it("should call onSubmit with the form data when the submit button is clicked", () => {
    const handleSubmit = jest.fn();
    render(<Form5 onSubmit={handleSubmit} />);

    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({
      name: 'Test Name',
      email: 'test@example.com',
    }));
  });

  it("should render with the correct button text and type", () => {
    render(<Form5 />);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

    it("should have default prop values", () => {
      const { getByRole } = render(<Form5 />);
      const submitButton = getByRole("button", { name: /Submit/i });
      expect(submitButton).toBeInTheDocument();
    });
});