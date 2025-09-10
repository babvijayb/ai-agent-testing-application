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
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('handles input changes correctly', () => {
    render(<SampleForm />);
    const inputElement = screen.getByLabelText('Name:');
    fireEvent.change(inputElement, { target: { value: 'Test Name' } });
    expect(inputElement.value).toBe('Test Name');
  });

  it('calls onSubmit with correct data on form submission', () => {
    const onSubmit = vi.fn();
    render(<SampleForm onSubmit={onSubmit} />);
    const inputElement = screen.getByLabelText('Name:');
    fireEvent.change(inputElement, { target: { value: 'Test Name' } });
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ name: 'Test Name' }));
  });

    it('handles initial props correctly', () => {
        const initialName = 'Initial Name';
        render(<SampleForm initialName={initialName} />);
        const inputElement = screen.getByLabelText('Name:');
        expect(inputElement.value).toBe(initialName);
    });
});