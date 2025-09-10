import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm';
import { vi } from 'vitest';

describe("<SampleForm>", () => {
  it("renders without crashing", () => {
    render(<SampleForm />);
  });

  it("renders the input field and submit button", () => {
    render(<SampleForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("updates input value on change", () => {
    render(<SampleForm />);
    const inputElement = screen.getByLabelText(/name/i);
    fireEvent.change(inputElement, { target: { value: "test name" } });
    expect(inputElement.value).toBe("test name");
  });

  it("calls onSubmit with the correct data on form submission", () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const inputElement = screen.getByLabelText(/name/i);
    fireEvent.change(inputElement, { target: { value: "test name" } });
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ name: "test name" });
  });

  it("does not call onSubmit if the input is empty", () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});