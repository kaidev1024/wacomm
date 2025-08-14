import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, beforeEach, expect, vi } from 'vitest';
import ToggleButton from './ToggleButton';

const mockOnChange = vi.fn();

describe('ToggleButton', () => {
  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('renders with basic props', () => {
    render(<ToggleButton label="Test Toggle" checked={false} onChange={mockOnChange} />);
    
    const labelText = screen.getByText('Test Toggle');
    expect(labelText).toBeInTheDocument();
    
    const switchElement = document.querySelector('input[type="checkbox"]');
    expect(switchElement).toBeInTheDocument();
  });

  test('renders with ReactElement label', () => {
    const customLabel = <span data-testid="custom-label">Custom Label</span>;
    render(<ToggleButton label={customLabel} checked={false} onChange={mockOnChange} />);
    
    const labelElement = screen.getByTestId('custom-label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('Custom Label');
  });

  test('calls onChange when clicked', () => {
    render(<ToggleButton label="Test Toggle" checked={false} onChange={mockOnChange} />);
    
    const switchElement = document.querySelector('input[type="checkbox"]');
    expect(switchElement).toBeInTheDocument();
    
    fireEvent.click(switchElement!);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('calls onChange with correct value when toggling from checked', () => {
    render(<ToggleButton label="Test Toggle" checked={true} onChange={mockOnChange} />);
    
    const switchElement = document.querySelector('input[type="checkbox"]');
    expect(switchElement).toBeInTheDocument();
    
    fireEvent.click(switchElement!);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(false, expect.any(Object), undefined);
  });

  test('applies custom className correctly', () => {
    render(<ToggleButton label="Test Toggle" checked={false} onChange={mockOnChange} className="custom-class" />);
    
    const container = document.querySelector('.w-full.p-1');
    expect(container).toHaveClass('custom-class');
  });

  test('switch reflects checked state', () => {
    const { rerender } = render(<ToggleButton label="Test Toggle" checked={false} onChange={mockOnChange} />);
    
    let switchElement = document.querySelector('input[type="checkbox"]');
    expect(switchElement).not.toBeChecked();
    
    rerender(<ToggleButton label="Test Toggle" checked={true} onChange={mockOnChange} />);
    
    switchElement = document.querySelector('input[type="checkbox"]');
    expect(switchElement).toBeChecked();
  });

  test('switch reflects disabled state', () => {
    const { rerender } = render(<ToggleButton label="Test Toggle" checked={false} onChange={mockOnChange} disabled={false} />);
    
    let switchElement = document.querySelector('input[type="checkbox"]');
    expect(switchElement).not.toBeDisabled();
    
    rerender(<ToggleButton label="Test Toggle" checked={false} onChange={mockOnChange} disabled={true} />);
    
    switchElement = document.querySelector('input[type="checkbox"]');
    expect(switchElement).toBeDisabled();
  });
});