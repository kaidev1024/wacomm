import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, beforeEach, expect, vi } from 'vitest';
import Button from './Button';

const mockOnClick = vi.fn();

describe('Button', () => {
  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('calls onClick when clicked', () => {
    render(<Button label="button" onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('renders with default arguments', () => {
    render(<Button onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('');
  });

  test('applies disabled state correctly', () => {
    render(<Button label="Disabled" onClick={mockOnClick} disabled={true} />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('applies loading state correctly', () => {
    render(<Button label="Loading" onClick={mockOnClick} isLoading={true} />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();

    const LoadingIcon = screen.getByAltText('loading');
    expect(LoadingIcon).toBeInTheDocument();
  });

  test('applies highlighted state styling', () => {
    render(<Button label="Highlighted" onClick={mockOnClick} isHighlighted={true} />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-200', 'border-0');
  });

  test('combines disabled and highlighted states', () => {
    render(
      <Button
        label="Disabled Highlighted"
        onClick={mockOnClick}
        disabled={true}
        isHighlighted={true}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-gray-200');
  });

  test('combines loading and highlighted states', () => {
    render(
      <Button
        label="Loading Highlighted"
        onClick={mockOnClick}
        isLoading={true}
        isHighlighted={true}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-blue-200', 'border-0');
  });
});
