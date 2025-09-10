import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, it, describe, expect } from 'vitest';
import SampleForm6 from './SampleForm6.jsx';

describe("<SampleForm6>", () => {
  it('renders without crashing', () => {
    render(<SampleForm6 />);
  });

  it('renders input and button', () => {
    render(<SampleForm6 />);
    const inputElement = screen.getByLabelText(/Name:/i);
    const buttonElement = screen.getByRole('button', { name: /Submit/i });
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('handles input change', () => {
    render(<SampleForm6 />);
    const inputElement = screen.getByLabelText(/Name:/i);
    fireEvent.change(inputElement, { target: { value: 'Test Name' } });
    expect(inputElement.value).toBe('Test Name');
  });

  it('calls onSubmit with correct data on form submission', () => {
    const onSubmit = vi.fn();
    render(<SampleForm6 onSubmit={onSubmit} />);
    const inputElement = screen.getByLabelText(/Name:/i);
    fireEvent.change(inputElement, { target: { value: 'Test Name' } });
    const buttonElement = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(buttonElement);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ name: 'Test Name' });
  });

  it('button is disabled when name is an empty string', () => {
    render(<SampleForm6 />);
    const inputElement = screen.getByLabelText(/Name:/i);
    const buttonElement = screen.getByRole('button', { name: /Submit/i });
    fireEvent.change(inputElement, { target: { value: '' } });
    expect(buttonElement).toBeDisabled();
  });

  it('button is enabled when name is not an empty string', () => {
    render(<SampleForm6 />);
    const inputElement = screen.getByLabelText(/Name:/i);
    const buttonElement = screen.getByRole('button', { name: /Submit/i });
    fireEvent.change(inputElement, { target: { value: 'Test Name' } });
    expect(buttonElement).toBeEnabled();
  });
});