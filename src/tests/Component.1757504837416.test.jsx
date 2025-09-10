import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import SampleForm from './SampleForm.jsx';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders the input field with the correct attributes', () => {
    render(<SampleForm />);
    const inputElement = screen.getByLabelText('Name:');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('renders the submit button', () => {
    render(<SampleForm />);
    const buttonElement = screen.getByRole('button', { name: 'Submit' });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  it('updates input value on change', () => {
    render(<SampleForm />);
    const inputElement = screen.getByLabelText('Name:');
    fireEvent.change(inputElement, { target: { value: 'test name' } });
    expect(inputElement.value).toBe('test name');
  });

  it('calls onSubmit with the correct data when the form is submitted', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm onSubmit={onSubmitMock} />);
    const inputElement = screen.getByLabelText('Name:');
    fireEvent.change(inputElement, { target: { value: 'test name' } });
    const formElement = screen.getByRole('form');
    fireEvent.submit(formElement);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({ name: 'test name' });
  });
});