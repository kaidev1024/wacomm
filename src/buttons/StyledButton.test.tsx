import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, beforeEach, expect, vi } from 'vitest';
import StyledButton from './StyledButton';

const mockOnClick = vi.fn();

describe('StyledButton', () => {
  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('renders with basic props', () => {
    render(<StyledButton label="Default" onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-white', 'border-blue-500');

    const labelDiv = screen.getByText('Default');
    expect(labelDiv).toHaveClass('text-blue-500', 'text-sm');
  });

  test('calls onClick when clicked', () => {
    render(<StyledButton label="Click Me" onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('applies highlighted styling correctly', () => {
    render(<StyledButton label="Highlighted" onClick={mockOnClick} isHighlighted={true} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-500', 'border-0');
    
    const labelDiv = screen.getByText('Highlighted');
    expect(labelDiv).toHaveClass('text-white', 'text-sm');
  });

  test('applies loading state correctly', () => {
    render(<StyledButton label="Loading" onClick={mockOnClick} isLoading={true} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    
    const loadingIndicator = screen.getByAltText('loading');
    expect(loadingIndicator).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('combines highlighted and loading states', () => {
    render(<StyledButton label="Highlighted Loading" onClick={mockOnClick} isHighlighted={true} isLoading={true} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-blue-500', 'border-0');
    
    const labelDiv = screen.getByText('Highlighted Loading');
    expect(labelDiv).toHaveClass('text-white', 'text-sm');
    
    const loadingIndicator = screen.getByAltText('loading');
    expect(loadingIndicator).toBeInTheDocument();
  });
});