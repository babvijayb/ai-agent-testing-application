import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import SampleForm7 from './SampleForm7.jsx';

describe('<SampleForm7>', () => {
  it('renders without crashing', () => {
    render(<SampleForm7 />);
  });

  it('renders input fields with correct labels and button', () => {
    render(<SampleForm7 />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('updates input values on change', () => {
    render(<SampleForm7 />);
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
  });

  it('calls onSubmit with correct data on form submission', () => {
    const onSubmit = vi.fn();
    render(<SampleForm7 onSubmit={onSubmit} />);
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ name: 'John Doe', email: 'john.doe@example.com' });
  });
});