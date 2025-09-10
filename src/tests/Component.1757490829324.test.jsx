import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm8 from './SampleForm8.jsx';
import { vi } from 'vitest';

describe('<SampleForm8>', () => {
  it('renders without crashing', () => {
    render(<SampleForm8 />);
  });

  it('renders required UI elements', () => {
    render(<SampleForm8 />);
    expect(screen.getByLabelText('Text Input:')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('handles input value correctly', () => {
    render(<SampleForm8 />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test value' } });
    expect(inputElement.value).toBe('test value');
  });

  it('calls onSubmit with the correct value when form is submitted', () => {
    const handleSubmit = vi.fn();
    render(<SampleForm8 onSubmit={handleSubmit} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test value' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ textInput: 'test value' });
  });
});