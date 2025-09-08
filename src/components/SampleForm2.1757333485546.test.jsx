import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import SampleForm2 from './SampleForm2';

describe('<SampleForm2>', () => {
  it('renders without crashing', () => {
    render(<SampleForm2 />);
  });

  it('renders input and submit button', () => {
    render(<SampleForm2 />);
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    expect(inputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('handles input change correctly', () => {
    render(<SampleForm2 />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test input' } });
    expect(inputElement.value).toBe('test input');
  });

  it('calls onSubmit with correct value on form submit', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm2 onSubmit={onSubmitMock} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test input' } });
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({ inputValue: 'test input' });
  });

  it('handles initial value prop correctly', () => {
    render(<SampleForm2 initialValue="initial value" />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement.value).toBe('initial value');
  });
});