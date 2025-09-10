import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm';
import { vi } from 'vitest';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders the form with input and submit button', () => {
    render(<SampleForm />);
    const inputElement = screen.getByLabelText(/name/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(inputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('updates the input value on change', () => {
    render(<SampleForm />);
    const inputElement = screen.getByLabelText(/name/i);
    fireEvent.change(inputElement, { target: { value: 'Test Name' } });
    expect(inputElement.value).toBe('Test Name');
  });

  it('calls onSubmit prop with the correct value when the form is submitted', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const inputElement = screen.getByLabelText(/name/i);
    fireEvent.change(inputElement, { target: { value: 'Test Name' } });
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'Test Name' });
  });

    it('calls onSubmit with empty string if input is empty', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledWith({ name: '' });
  });
});