import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm';
import { vi } from 'vitest';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders required elements', () => {
    render(<SampleForm />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Name:' })).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Email:' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('handles props correctly', () => {
    const initialName = 'Test Name';
    const initialEmail = 'test@example.com';
    render(<SampleForm initialName={initialName} initialEmail={initialEmail} />);
    expect(screen.getByRole('textbox', { name: 'Name:' })).toHaveValue(initialName);
    expect(screen.getByRole('textbox', { name: 'Email:' })).toHaveValue(initialEmail);
  });

  it('allows typing in inputs', () => {
    render(<SampleForm />);
    const nameInput = screen.getByRole('textbox', { name: 'Name:' });
    const emailInput = screen.getByRole('textbox', { name: 'Email:' });

    fireEvent.change(nameInput, { target: { value: 'New Name' } });
    fireEvent.change(emailInput, { target: { value: 'new@example.com' } });

    expect(nameInput).toHaveValue('New Name');
    expect(emailInput).toHaveValue('new@example.com');
  });

  it('calls onSubmit with correct values on submit', async () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);

    const nameInput = screen.getByRole('textbox', { name: 'Name:' });
    const emailInput = screen.getByRole('textbox', { name: 'Email:' });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'Submitted Name' } });
    fireEvent.change(emailInput, { target: { value: 'submitted@example.com' } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'Submitted Name', email: 'submitted@example.com' });
  });
});