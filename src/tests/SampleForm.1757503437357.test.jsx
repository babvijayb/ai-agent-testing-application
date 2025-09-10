import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm';
import { vi } from 'vitest';

describe("<SampleForm>", () => {
  it("renders without crashing", () => {
    render(<SampleForm />);
  });

  it("renders input elements", () => {
    render(<SampleForm />);
    expect(screen.getByLabelText("Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<SampleForm />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("updates input values on change", () => {
    render(<SampleForm />);
    const nameInput = screen.getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "Test Name" } });
    expect(nameInput.value).toBe("Test Name");

    const emailInput = screen.getByLabelText("Email:");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });

  it("calls onSubmit with correct data on form submission", () => {
    const onSubmit = vi.fn();
    render(<SampleForm onSubmit={onSubmit} />);
    const nameInput = screen.getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "Test Name" } });
    const emailInput = screen.getByLabelText("Email:");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ name: "Test Name", email: "test@example.com" });
  });
});