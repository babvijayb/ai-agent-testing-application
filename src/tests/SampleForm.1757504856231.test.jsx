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
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('handles input changes', () => {
    render(<SampleForm />);
    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    expect(emailInput.value).toBe('john.doe@example.com');
  });

  it('calls onSubmit with correct data on form submission', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'John Doe', email: 'john.doe@example.com' });
  });

    it('calls onSubmit with empty data if inputs are empty on form submission', () => {
        const handleSubmit = vi.fn();
        render(<SampleForm onSubmit={handleSubmit} />);
        const submitButton = screen.getByRole('button', { name: 'Submit' });
        fireEvent.click(submitButton);

        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit).toHaveBeenCalledWith({ name: '', email: '' });
    });
});