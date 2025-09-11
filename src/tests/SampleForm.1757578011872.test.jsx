import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm';
import { vi } from 'vitest';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders input and button elements', () => {
    render(<SampleForm />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('handles input changes', () => {
    render(<SampleForm />);
    const inputElement = screen.getByLabelText('Name:');
    fireEvent.change(inputElement, { target: { value: 'test name' } });
    expect(inputElement.value).toBe('test name');
  });

  it('calls onSubmit with correct data on form submission', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const inputElement = screen.getByLabelText('Name:');
    fireEvent.change(inputElement, { target: { value: 'test name' } });
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'test name' });
  });

  it('calls onSubmit with empty string if input is empty', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledWith({name: ""});
  });
});