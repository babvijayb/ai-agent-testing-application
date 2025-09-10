import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm from './SampleForm.jsx';
import { vi } from 'vitest';

describe('<SampleForm>', () => {
  it('renders without crashing', () => {
    render(<SampleForm />);
  });

  it('renders the name input and label', () => {
    render(<SampleForm />);
    const nameLabel = screen.getByLabelText('Name:');
    const nameInput = screen.getByRole('textbox', { name: 'Name:' });
    expect(nameLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
  });

  it('renders the email input and label', () => {
    render(<SampleForm />);
    const emailLabel = screen.getByLabelText('Email:');
    const emailInput = screen.getByRole('textbox', { name: 'Email:' });
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });


  it('renders the submit button', () => {
    render(<SampleForm />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
  });


  it('handles input changes correctly', () => {
    render(<SampleForm />);
    const nameInput = screen.getByRole('textbox', { name: 'Name:' });
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    const emailInput = screen.getByRole('textbox', { name: 'Email:' });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    expect(emailInput.value).toBe('john.doe@example.com');
  });


  it('calls onSubmit with the correct values when the form is submitted', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm onSubmit={handleSubmit} />);
    const nameInput = screen.getByRole('textbox', { name: 'Name:' });
    const emailInput = screen.getByRole('textbox', { name: 'Email:' });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'Test Name',
      email: 'test@example.com',
    });
  });
});