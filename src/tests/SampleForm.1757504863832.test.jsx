import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import SampleForm from './SampleForm';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders the form with the correct elements', () => {
    render(<SampleForm />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('updates input values correctly', () => {
    render(<SampleForm />);
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(nameInput).toHaveValue('Test Name');
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('calls onSubmit with the correct data when the form is submitted', () => {
    const onSubmit = vi.fn();
    render(<SampleForm onSubmit={onSubmit} />);
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Test Name',
      email: 'test@example.com',
    });
  });
});