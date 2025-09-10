import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import SampleForm7 from './SampleForm7';

describe('<SampleForm7>', () => {
  it('renders without crashing', () => {
    render(<SampleForm7 />);
  });

  it('renders the email input and submit button', () => {
    render(<SampleForm7 />);
    const emailInput = screen.getByLabelText(/Email:/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('updates the email input value on change', () => {
    render(<SampleForm7 />);
    const emailInput = screen.getByLabelText(/Email:/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  it('calls onSubmit with the correct email when the form is submitted', () => {
    const onSubmit = vi.fn();
    render(<SampleForm7 onSubmit={onSubmit} />);
    const emailInput = screen.getByLabelText(/Email:/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ email: 'test@example.com' });
  });
});