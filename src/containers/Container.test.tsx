import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect, vi } from 'vitest';
import Container from './Container';

describe('Container', () => {
  test('renders as Row by default with children', () => {
    const { container } = render(
      <Container>
        <div>Child 1</div>
        <div>Child 2</div>
      </Container>
    );
    
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass('flex', 'flex-row', 'gap-2');
  });

  test('renders as Column when isVertical is true', () => {
    const { container } = render(
      <Container isVertical={true}>
        <div>Child 1</div>
        <div>Child 2</div>
      </Container>
    );
    
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass('flex', 'flex-col', 'gap-2');
  });

  test('applies custom className to Row', () => {
    const customClass = 'custom-row-class';
    const { container } = render(
      <Container className={customClass} isVertical={false}>
        <div>Test content</div>
      </Container>
    );
    
    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass('flex', 'flex-row', 'gap-2', customClass);
  });

  test('applies custom className to Column', () => {
    const customClass = 'custom-column-class';
    const { container } = render(
      <Container className={customClass} isVertical={true}>
        <div>Test content</div>
      </Container>
    );
    
    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass('flex', 'flex-col', 'gap-2', customClass);
  });

  test('calls onClick handler when Row is clicked', () => {
    const mockOnClick = vi.fn();
    
    render(
      <Container onClick={mockOnClick} isVertical={false}>
        <div>Test content</div>
      </Container>
    );
    
    const containerDiv = screen.getByText('Test content').parentElement;
    fireEvent.click(containerDiv!);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('calls onClick handler when Column is clicked', () => {
    const mockOnClick = vi.fn();
    
    render(
      <Container onClick={mockOnClick} isVertical={true}>
        <div>Test content</div>
      </Container>
    );
    
    const containerDiv = screen.getByText('Test content').parentElement;
    fireEvent.click(containerDiv!);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('defaults to Row when isVertical is not specified', () => {
    const { container } = render(
      <Container>
        <div>Default behavior</div>
      </Container>
    );
    
    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass('flex', 'flex-row', 'gap-2');
    expect(containerDiv).not.toHaveClass('flex-col');
  });
});