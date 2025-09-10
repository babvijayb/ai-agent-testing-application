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

  it('updates input value on change', () => {
    render(<SampleForm />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test value' } });
    expect(inputElement.value).toBe('test value');
  });

  it('calls onSubmit with correct value on form submission', () => {
    const onSubmit = vi.fn();
    render(<SampleForm onSubmit={onSubmit} />);
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(inputElement, { target: { value: 'test value' } });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ input: 'test value' });
  });

  it('calls onSubmit with an empty string if input is empty on form submission', () => {
    const onSubmit = vi.fn();
    render(<SampleForm onSubmit={onSubmit} />);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ input: '' });
  });

});