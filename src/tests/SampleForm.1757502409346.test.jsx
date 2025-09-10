import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm';
import { vi } from 'vitest';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders input and submit button', () => {
    render(<SampleForm />);
    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    expect(input).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(<SampleForm />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test value' } });
    expect(input.value).toBe('test value');
  });

  it('calls onSubmit with correct value on submit', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test value' } });
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ inputValue: 'test value' });
  });

  it('handles no submit prop', () => {
    render(<SampleForm />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
  });
});