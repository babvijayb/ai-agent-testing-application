import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import SampleForm from './SampleForm';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders the input and submit button', () => {
    render(<SampleForm />);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: /submit/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('updates input value correctly', () => {
    render(<SampleForm />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test value' } });
    expect(inputElement.value).toBe('test value');
  });

  it('calls onSubmit with the correct value when the form is submitted', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm onSubmit={onSubmitMock} />);
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(inputElement, { target: { value: 'test value' } });
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({ inputValue: 'test value' });
  });

  it('handles empty input submission', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm onSubmit={onSubmitMock} />);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({ inputValue: '' });
  });
});