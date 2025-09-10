import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm';
import { vi } from 'vitest';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders the input and submit button', () => {
    render(<SampleForm />);
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    expect(inputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('updates the input value on change', () => {
    render(<SampleForm />);
    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: 'test value' } });
    expect(inputElement.value).toBe('test value');
  });

  it('calls onSubmit with the correct value when the form is submitted', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm onSubmit={onSubmitMock} />);
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.change(inputElement, { target: { value: 'test value' } });
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({ inputValue: 'test value' });
  });

  it('handles empty input on submit', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm onSubmit={onSubmitMock} />);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({ inputValue: "" });
  });
});