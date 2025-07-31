import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { describe, test, beforeEach, expect, vi } from 'vitest';
import AddButton from './AddButton';

const mockOnClick = vi.fn();

describe('AddButton', () => {
  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('calls onClick when clicked', () => {
    render(<AddButton label="Add Item" onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');

    fireEvent.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('handles empty label', () => {
    render(<AddButton label="" onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('');
  });

  it('renders correctly with label name', () => {
    render(<AddButton label="AddButton" onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('AddButton');
  });
});