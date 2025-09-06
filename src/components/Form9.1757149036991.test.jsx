import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form9 from './Form9';
import { vi } from 'vitest';

describe('<Form9>', () => {
  it('renders without errors', () => {
    render(<Form9 />);
    expect(screen.getByText('Form 9')).toBeInTheDocument();
  });

  it('calls onSubmit with the correct data when the form is submitted', () => {
    const onSubmitMock = vi.fn();
    render(<Form9 onSubmit={onSubmitMock} />);
    const input = screen.getByLabelText('Name:');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(input, { target: { value: 'Test Name' } });
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({ name: 'Test Name' });
  });

  it('updates the input value correctly', () => {
    render(<Form9 />);
    const input = screen.getByLabelText('Name:');

    fireEvent.change(input, { target: { value: 'Test Value' } });

    expect(input.value).toBe('Test Value');
  });

  it('renders with default props', () => {
    render(<Form9 />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
  });
});