import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, beforeEach, expect, vi } from 'vitest';
import SvgButton from './SvgButton';

const mockOnClick = vi.fn();

// Mock SVG component for testing
const MockSvg = ({ size, className }: { size?: string; className?: string }) => (
  <svg
    data-testid="mock-svg"
    width={size || '16'}
    height={size || '16'}
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M8 0L16 8L8 16L0 8Z" />
  </svg>
);

describe('SvgButton', () => {
  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('renders with basic props and applies default styling', () => {
    render(
      <SvgButton
        icon={{ Svg: MockSvg }}
        onClick={mockOnClick}
        label="Test Button"
        className="custom-button-class"
        labelClassName="custom-label-class"
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test Button');
    expect(button).toHaveClass('bg-white', 'custom-button-class');
    expect(screen.getByTestId('mock-svg')).toBeInTheDocument();

    const svg = screen.getByTestId('mock-svg');
    expect(svg).toHaveClass('fill-gray-600');

    const labelDiv = screen.getByText('Test Button');
    expect(labelDiv).toHaveClass('text-gray-600', 'custom-label-class');
  });

  test('calls onClick when clicked', () => {
    render(<SvgButton icon={{ Svg: MockSvg }} onClick={mockOnClick} label="Click Me" />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('applies highlighted styling correctly', () => {
    render(
      <SvgButton
        icon={{ Svg: MockSvg }}
        onClick={mockOnClick}
        label="Highlighted"
        isHighlighted={true}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-200', 'border-0');

    const svg = screen.getByTestId('mock-svg');
    expect(svg).toHaveClass('fill-blue-500');

    const labelDiv = screen.getByText('Highlighted');
    expect(labelDiv).toHaveClass('text-blue-500');
  });

  test('applies disabled state correctly', () => {
    render(
      <SvgButton icon={{ Svg: MockSvg }} onClick={mockOnClick} label="Disabled" disabled={true} />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-gray-200');

    const labelDiv = screen.getByText('Disabled');
    expect(labelDiv).toHaveClass('text-gray-888');

    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('applies loading state correctly', () => {
    render(
      <SvgButton icon={{ Svg: MockSvg }} onClick={mockOnClick} label="Loading" isLoading={true} />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    const LoadingIcon = screen.getByAltText('loading');
    expect(LoadingIcon).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('renders without label (icon only)', () => {
    render(<SvgButton icon={{ Svg: MockSvg }} onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('');
    expect(screen.getByTestId('mock-svg')).toBeInTheDocument();
  });

  test('applies vertical layout correctly', () => {
    render(
      <SvgButton icon={{ Svg: MockSvg }} onClick={mockOnClick} label="Vertical" isVertical={true} />
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Vertical');
  });

  test('combines highlighted and disabled states', () => {
    render(
      <SvgButton
        icon={{ Svg: MockSvg }}
        onClick={mockOnClick}
        label="Highlighted Disabled"
        isHighlighted={true}
        disabled={true}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-gray-200');

    const labelDiv = screen.getByText('Highlighted Disabled');
    expect(labelDiv).toHaveClass('text-gray-888');
  });

  test('combines highlighted and loading states', () => {
    render(
      <SvgButton
        icon={{ Svg: MockSvg }}
        onClick={mockOnClick}
        label="Highlighted Loading"
        isHighlighted={true}
        isLoading={true}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-blue-200', 'border-0');

    const svg = screen.getByTestId('mock-svg');
    expect(svg).toHaveClass('fill-blue-500');

    const LoadingIcon = screen.getByAltText('loading');
    expect(LoadingIcon).toBeInTheDocument();
  });
});
