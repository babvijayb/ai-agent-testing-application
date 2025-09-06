import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Test6 from './Test6';

describe("<Test6>", () => {
  it('renders without crashing', () => {
    render(<Test6 />);
  });

  it('renders the provided text prop', () => {
    const text = 'Hello, World!';
    render(<Test6 text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders the provided value prop', () => {
    const value = 123;
    render(<Test6 value={value} />);
    expect(screen.getByText(value.toString())).toBeInTheDocument();
  });

  it('calls the onClick prop when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Test6 onClick={onClickMock} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});