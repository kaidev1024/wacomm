import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect, vi } from 'vitest';
import Row from './Row';

describe('Row', () => {
  test('renders with children', () => {
    const { container } = render(
      <Row>
        <div>Child 1</div>
        <div>Child 2</div>
      </Row>
    );
    
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    const rowDiv = container.firstChild;
    expect(rowDiv).toHaveClass('flex', 'flex-row', 'gap-2', 'items-center');
  });

  test('applies custom className', () => {
    const customClass = 'custom-class';
    const { container } = render(
      <Row className={customClass}>
        <div>Test content</div>
      </Row>
    );
    
    const rowDiv = container.firstChild;
    expect(rowDiv).toHaveClass('flex', 'flex-row', 'gap-2', 'items-center', customClass);
  });

  test('calls onClick handler when clicked', () => {
    const mockOnClick = vi.fn();
    
    render(
      <Row onClick={mockOnClick}>
        <div>Test content</div>
      </Row>
    );
    
    const rowDiv = screen.getByText('Test content').parentElement;
    fireEvent.click(rowDiv!);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});