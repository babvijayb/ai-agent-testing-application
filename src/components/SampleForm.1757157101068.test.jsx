import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import SampleForm from './SampleForm';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders input and submit button', () => {
    render(<SampleForm />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Name:' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(<SampleForm />);
    const inputElement = screen.getByRole('textbox', { name: 'Name:' });
    fireEvent.change(inputElement, { target: { value: 'test name' } });
    expect(inputElement.value).toBe('test name');
  });

  it('calls onSubmit with the correct form data when the form is submitted', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm onSubmit={onSubmitMock} />);
    const inputElement = screen.getByRole('textbox', { name: 'Name:' });
    fireEvent.change(inputElement, { target: { value: 'test name' } });
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalledWith({ name: 'test name' });
  });

  it('calls onSubmit with empty name when name is empty', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm onSubmit={onSubmitMock} />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalledWith({ name: '' });
  });
});