import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm';
import { vi } from 'vitest';

describe("<SampleForm>", () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders the input field and submit button', () => {
    render(<SampleForm />);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: /Submit/i });
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('updates the input value when typing', () => {
    render(<SampleForm />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test input' } });
    expect(inputElement.value).toBe('test input');
  });

  it('calls onSubmit with the correct value when the form is submitted', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test input' } });
    const buttonElement = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(buttonElement);
    expect(handleSubmit).toHaveBeenCalledWith({ inputValue: 'test input' });
  });

  it('calls onSubmit with an empty string when the form is submitted with an empty input', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const buttonElement = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(buttonElement);
    expect(handleSubmit).toHaveBeenCalledWith({ inputValue: '' });
  });
});