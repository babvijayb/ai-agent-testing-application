import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm';
import { vi } from 'vitest';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders the form elements correctly', () => {
    render(<SampleForm />);
    const nameLabel = screen.getByText('Name:');
    const nameInput = screen.getByLabelText('Name:');
    const emailLabel = screen.getByText('Email:');
    const emailInput = screen.getByLabelText('Email:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });


    expect(nameLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('handles input changes correctly', () => {
    render(<SampleForm />);
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
  });

  it('calls onSubmit with correct data when the form is submitted', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'John Doe', email: 'john.doe@example.com' });
  });
});