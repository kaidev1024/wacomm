import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, beforeEach, expect, vi } from 'vitest';
import CacheButton from './CacheButton';

const mockOnClick = vi.fn();

describe('CacheButton', () => {
  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('renders with basic props', () => {
    render(<CacheButton id="test-1" label="Cache Test" onClick={mockOnClick} isHighlighted={false} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Cache Test');
  });

  test('calls onClick when clicked', () => {
    render(<CacheButton id="test-2" label="Click Me" onClick={mockOnClick} isHighlighted={false} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(expect.any(Function));
  });

  test('sets loading state when clicked', () => {
    render(<CacheButton id="test-3" label="Loading Test" onClick={mockOnClick} isHighlighted={false} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(button).toBeDisabled();
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

  test('cancelLoading callback stops loading state', async () => {
    let cancelLoading: () => void;
    mockOnClick.mockImplementation((callback) => {
      cancelLoading = callback;
    });

    render(<CacheButton id="test-4" label="Cancel Test" onClick={mockOnClick} isHighlighted={false} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(button).toBeDisabled();
    expect(screen.getByAltText('loading')).toBeInTheDocument();
    
    cancelLoading!();
    
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
    expect(screen.queryByAltText('loading')).not.toBeInTheDocument();
  });

  test('applies highlighted styling correctly', () => {
    render(<CacheButton id="test-5" label="Highlighted" onClick={mockOnClick} isHighlighted={true} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-500', 'border-0');
    
    const labelDiv = screen.getByText('Highlighted');
    expect(labelDiv).toHaveClass('text-white', 'text-sm');
  });

  test('applies non-highlighted styling correctly', () => {
    render(<CacheButton id="test-6" label="Not Highlighted" onClick={mockOnClick} isHighlighted={false} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-white', 'border-blue-500');
    
    const labelDiv = screen.getByText('Not Highlighted');
    expect(labelDiv).toHaveClass('text-blue-500', 'text-sm');
  });

  test('different ids have independent loading states', () => {
    render(
      <div>
        <CacheButton id="test-8a" label="Button A" onClick={mockOnClick} isHighlighted={false} />
        <CacheButton id="test-8b" label="Button B" onClick={mockOnClick} isHighlighted={false} />
      </div>
    );
    
    const buttonA = screen.getByRole('button', { name: 'Button A' });
    const buttonB = screen.getByRole('button', { name: 'Button B' });
    
    fireEvent.click(buttonA);
    expect(buttonA).toBeDisabled();
    expect(buttonB).not.toBeDisabled();
  });
});