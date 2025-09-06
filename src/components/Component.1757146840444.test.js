import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form3 from './Form3.jsx';

describe("<Form3>", () => {
  it('renders without crashing', () => {
    render(<Form3 />);
    expect(screen.getByText(/form3/i)).toBeInTheDocument();
  });

  it('renders the correct initial values', () => {
    render(<Form3 initialValue="initial" />);
    expect(screen.getByDisplayValue('initial')).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(<Form3 />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'newValue' } });
    expect(inputElement.value).toBe('newValue');
  });

  it('calls the onChange prop when input changes', () => {
    const onChangeMock = jest.fn();
    render(<Form3 onChange={onChangeMock} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'changedValue' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('changedValue');
  });

  it('renders with default placeholder if none is provided', () => {
    render(<Form3 />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('placeholder', 'Enter text');
  });

  it('renders with provided placeholder', () => {
    render(<Form3 placeholder="Custom Placeholder" />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('placeholder', 'Custom Placeholder');
  });
});