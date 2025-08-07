import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect, vi } from 'vitest';
import ModalButton from './ModalButton';

// Mock other components to isolate ModalButton.tsx in unit test.
// Mock the Modal component
vi.mock('src/Modal', () => ({
  default: vi.fn(({ isOpen, onClose, content, title }) => (
    isOpen ? (
      <div data-testid="modal">
        <div data-testid="modal-title">{title}</div>
        <div data-testid="modal-content">{content}</div>
        <button data-testid="modal-close" onClick={onClose}>Close</button>
      </div>
    ) : null
  ))
}));

// Mock the StyledButton component
vi.mock('./StyledButton', () => ({
  default: vi.fn(({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
  ))
}));

describe('ModalButton', () => {
  test('renders with basic props', () => {
    render(<ModalButton label="Open Modal" content="Modal content" />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Open Modal');
  });

  test('opens modal when button is clicked', () => {
    render(<ModalButton label="Open Modal" content="Test content" />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('modal-title')).toHaveTextContent('Open Modal');
    expect(screen.getByTestId('modal-content')).toHaveTextContent('Test content');
  });

  test('closes modal when close button is clicked', () => {
    render(<ModalButton label="Open Modal" content="Test content" />);
    
    // Open modal
    const openButton = screen.getByRole('button');
    fireEvent.click(openButton);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    
    // Close modal
    const closeButton = screen.getByTestId('modal-close');
    fireEvent.click(closeButton);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});