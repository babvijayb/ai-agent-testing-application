import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import SampleForm5 from './SampleForm5.jsx';

describe('<SampleForm5>', () => {
  it('renders without crashing', () => {
    render(<SampleForm5 />);
  });

  it('renders the input and button', () => {
    render(<SampleForm5 />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('updates the input value on change', () => {
    render(<SampleForm5 />);
    const inputElement = screen.getByLabelText('Name:');
    fireEvent.change(inputElement, { target: { value: 'test name' } });
    expect(inputElement.value).toBe('test name');
  });


  it('calls onSubmit with the correct data when the form is submitted', () => {
    const onSubmitMock = vi.fn();
    render(<SampleForm5 onSubmit={onSubmitMock} />);
    const inputElement = screen.getByLabelText('Name:');
    fireEvent.change(inputElement, { target: { value: 'test name' } });
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalledWith({ name: 'test name' });
  });
});