import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect, vi } from 'vitest';
import Column from './Column';

describe('Column', () => {
  test('renders with children', () => {
    const { container } = render(
      <Column>
        <div>Child 1</div>
        <div>Child 2</div>
      </Column>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    const columnDiv = container.firstChild;
    expect(columnDiv).toHaveClass('flex', 'flex-col', 'gap-2');
  });

  test('applies custom className', () => {
    const customClass = 'custom-class';
    const { container } = render(
      <Column className={customClass}>
        <div>Test content</div>
      </Column>
    );

    const columnDiv = container.firstChild;
    expect(columnDiv).toHaveClass('flex', 'flex-col', 'gap-2', customClass);
  });
});
