import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PriceToggle from './PriceToggle.jsx';
import { vi } from 'vitest';

describe("<PriceToggle>", () => {
  it("renders without crashing", () => {
    render(<PriceToggle />);
  });

  it("renders the toggle input", () => {
    render(<PriceToggle />);
    const toggleInput = screen.getByRole('checkbox');
    expect(toggleInput).toBeInTheDocument();
  });

  it("renders the monthly price when isMonthly is true", () => {
    render(<PriceToggle isMonthly={true} monthlyPrice={10} yearlyPrice={20} />);
    const monthlyPriceText = screen.getByText(/10/);
    expect(monthlyPriceText).toBeInTheDocument();
  });


  it("renders the yearly price when isMonthly is false", () => {
    render(<PriceToggle isMonthly={false} monthlyPrice={10} yearlyPrice={20} />);
    const yearlyPriceText = screen.getByText(/20/);
    expect(yearlyPriceText).toBeInTheDocument();
  });


  it("calls onChange when the toggle is clicked", () => {
    const onChange = vi.fn();
    render(<PriceToggle isMonthly={false} onChange={onChange} monthlyPrice={10} yearlyPrice={20} />);
    const toggleInput = screen.getByRole('checkbox');
    fireEvent.click(toggleInput);
    expect(onChange).toHaveBeenCalled();
  });
});