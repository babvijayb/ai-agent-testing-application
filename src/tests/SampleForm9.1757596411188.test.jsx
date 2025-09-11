import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm9 from './SampleForm9';
import { vi } from 'vitest';

describe('<SampleForm9>', () => {
  it('renders without crashing', () => {
    render(<SampleForm9 />);
  });

  it('renders the input and button', () => {
    render(<SampleForm9 />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });


  it('updates input value on change', () => {
    render(<SampleForm9 />);
    const inputElement = screen.getByLabelText(/name/i);
    fireEvent.change(inputElement, { target: { value: 'test name' } });
    expect(inputElement.value).toBe('test name');
  });

  it('calls onSubmit with the correct data when the form is submitted', () => {
    const onSubmit = vi.fn();
    render(<SampleForm9 onSubmit={onSubmit} />);
    const inputElement = screen.getByLabelText(/name/i);
    fireEvent.change(inputElement, { target: { value: 'test name' } });
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ name: 'test name' });
  });

  it('handles initial value of input correctly', () => {
    const initialName = 'Initial Name';
    render(<SampleForm9 initialName={initialName} />);
    const inputElement = screen.getByLabelText(/name/i);
    expect(inputElement.value).toBe(initialName);
  });
});