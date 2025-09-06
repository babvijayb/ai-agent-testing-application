import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form10 from './Form10';
import { vi } from 'vitest';

describe('<Form10>', () => {
  it('renders without crashing', () => {
    render(<Form10 />);
  });

  it('renders the name input and label', () => {
    render(<Form10 />);
    const nameLabel = screen.getByLabelText('Name:');
    const nameInput = screen.getByRole('textbox', { name: 'Name:' });
    expect(nameLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
  });

  it('renders the email input and label', () => {
    render(<Form10 />);
    const emailLabel = screen.getByLabelText('Email:');
    const emailInput = screen.getByRole('textbox', { name: 'Email:' });
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<Form10 />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
  });

  it('handles input changes correctly', () => {
    render(<Form10 />);
    const nameInput = screen.getByRole('textbox', { name: 'Name:' });
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  });

  it('calls onSubmit with correct data when form is submitted', () => {
    const handleSubmit = vi.fn();
    render(<Form10 onSubmit={handleSubmit} />);
    const nameInput = screen.getByRole('textbox', { name: 'Name:' });
    const emailInput = screen.getByRole('textbox', { name: 'Email:' });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'John Doe', email: 'john.doe@example.com' });
  });
});