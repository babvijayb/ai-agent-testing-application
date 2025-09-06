import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component.1757146877283';

describe("<Component>")
{
    it('should render without errors', () => {
        render(<Component />);
        const element = screen.getByText(/Component/i);
        expect(element).toBeInTheDocument();
    });

    it('should render with correct props', () => {
        const testProp = "testValue";
        render(<Component testProp={testProp} />);
        const element = screen.getByText(/testValue/i);
        expect(element).toBeInTheDocument();
    });

    it('should trigger onClick', () => {
        const handleClick = jest.fn();
        render(<Component onClick={handleClick} />);
        const button = screen.getByText(/Component/i);
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
}