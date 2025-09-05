import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import DateDisplay from './DateDisplay';

describe('DateDisplay', () => {
  test('renders date correctly when date is valid', () => {
    render(<DateDisplay date="2023-12-25T10:30:00Z" />);
    
    const dateElement = screen.getByText('2023-12-25');
    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveClass('text-gray-600', 'text-sm');
  });

  test('returns null when date is empty string', () => {
    const { container } = render(<DateDisplay date="" />);
    expect(container.firstChild).toBeNull();
  });

  test('returns null when date is less than 10 characters', () => {
    const { container } = render(<DateDisplay date="2023-12" />);
    expect(container.firstChild).toBeNull();
  });

  test('truncates date to first 10 characters when longer than 10', () => {
    render(<DateDisplay date="2023-12-25T10:30:00.000Z" />);
    
    const dateElement = screen.getByText('2023-12-25');
    expect(dateElement).toBeInTheDocument();
    expect(dateElement).not.toHaveTextContent('T10:30:00.000Z');
  });
});