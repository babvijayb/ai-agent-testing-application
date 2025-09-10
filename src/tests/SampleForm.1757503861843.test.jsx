import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm';
import { vi } from 'vitest';

describe("<SampleForm>", () => {
  it("renders without crashing", () => {
    render(<SampleForm />);
  });

  it("renders required UI elements", () => {
    render(<SampleForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("handles input changes correctly", () => {
    render(<SampleForm />);
    const inputElement = screen.getByRole("textbox", { name: /name/i });
    fireEvent.change(inputElement, { target: { value: "Test Name" } });
    expect(inputElement.value).toBe("Test Name");
  });

  it("calls onSubmit with correct data on form submission", async () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const inputElement = screen.getByRole("textbox", { name: /name/i });
    fireEvent.change(inputElement, { target: { value: "Test Name" } });
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ name: "Test Name" });
  });
});