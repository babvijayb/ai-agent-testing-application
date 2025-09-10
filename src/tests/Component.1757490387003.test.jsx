import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm6 from './SampleForm6.jsx';
import { vi } from 'vitest';

describe('SampleForm6', () => {
  it('renders without crashing', () => {
    render(<SampleForm6 />);
  });

  it('renders the email input and submit button', () => {
    render(<SampleForm6 />);
    const emailInput = screen.getByLabelText('Email:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('updates email input value on change', () => {
    render(<SampleForm6 />);
    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  it('calls onSubmit with the correct data when the form is submitted', () => {
    const onSubmit = vi.fn();
    render(<SampleForm6 onSubmit={onSubmit} />);
    const emailInput = screen.getByLabelText('Email:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ email: 'test@example.com' });
  });
});