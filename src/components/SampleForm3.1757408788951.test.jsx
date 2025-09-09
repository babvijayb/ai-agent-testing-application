import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleForm3 from './SampleForm3';
import { vi } from 'vitest';

describe('<SampleForm3>', () => {
  it('renders without crashing', () => {
    render(<SampleForm3 />);
  });

  it('renders required UI elements', () => {
    render(<SampleForm3 />);
    expect(screen.getByLabelText('Text Input:')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(<SampleForm3 />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test value' } });
    expect(inputElement.value).toBe('test value');
  });

  it('calls onSubmit with the correct data when form is submitted', () => {
    const onSubmit = vi.fn();
    render(<SampleForm3 onSubmit={onSubmit} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test value' } });
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ textInput: 'test value' });
  });
});