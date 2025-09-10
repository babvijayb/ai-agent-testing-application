import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm';
import { vi } from 'vitest';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders the email input and submit button', () => {
    render(<SampleForm />);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('updates the email input value on change', () => {
    render(<SampleForm />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  it('calls onSubmit with the correct form data when the form is submitted', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm onSubmit={onSubmitMock} />);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({ email: 'test@example.com' });
  });

  it('does not call onSubmit when the email is not valid and the form is submitted', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm onSubmit={onSubmitMock} />);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
    fireEvent.click(submitButton);

    expect(onSubmitMock).not.toHaveBeenCalled();
  });

    it('renders the error message when the email is invalid and form is submitted', () => {
      render(<SampleForm />);
      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole('button', { name: /submit/i });

      fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
      fireEvent.click(submitButton);

      const errorMessage = screen.getByText(/Invalid email address/i);
      expect(errorMessage).toBeInTheDocument();
    });
});