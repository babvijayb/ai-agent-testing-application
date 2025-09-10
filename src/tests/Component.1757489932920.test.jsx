import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm5 from './SampleForm5.jsx';
import { vi } from 'vitest';

describe('SampleForm5', () => {
  it('renders without crashing', () => {
    render(<SampleForm5 />);
  });

  it('renders input fields with labels', () => {
    render(<SampleForm5 />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    render(<SampleForm5 />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('updates input values on change', () => {
    render(<SampleForm5 />);
    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    expect(emailInput.value).toBe('john.doe@example.com');
  });

  it('calls onSubmit with correct data on form submission', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm5 onSubmit={onSubmitMock} />);

    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({ name: 'John Doe', email: 'john.doe@example.com' });
  });
});