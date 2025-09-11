import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import TestForm from './TestForm.jsx';

describe('<TestForm>', () => {
  it('renders without crashing', () => {
    render(<TestForm />);
  });

  it('renders the input and submit button', () => {
    render(<TestForm />);
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(inputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('updates the input value on change', () => {
    render(<TestForm />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test value' } });
    expect(inputElement.value).toBe('test value');
  });

  it('calls onSubmit with the correct value when the form is submitted', () => {
    const onSubmitMock = vi.fn();
    render(<TestForm onSubmit={onSubmitMock} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test value' } });
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith('test value');
  });

  it('does not call onSubmit when input is empty and form is submitted', () => {
    const onSubmitMock = vi.fn();
    render(<TestForm onSubmit={onSubmitMock} />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});