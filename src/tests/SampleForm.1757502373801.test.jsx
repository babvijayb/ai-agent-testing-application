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
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(inputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('handles input change correctly', () => {
    render(<SampleForm />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test input' } });
    expect(inputElement.value).toBe('test input');
  });

  it('calls onSubmit with the correct value on form submission', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(inputElement, { target: { value: 'test input' } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ inputValue: 'test input' });
  });
});