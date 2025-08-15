import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, beforeEach, expect, vi } from 'vitest';
import YesNoButtons from './YesNoButtons';

const mockHandleYes = vi.fn();
const mockHandleNo = vi.fn();

describe('YesNoButtons', () => {
  beforeEach(() => {
    mockHandleYes.mockClear();
    mockHandleNo.mockClear();
  });

  test('renders with basic props', () => {
    render(<YesNoButtons yesLabel="Yes" noLabel="No" handleYes={mockHandleYes} handleNo={mockHandleNo} />);
    
    const yesButton = screen.getByRole('button', { name: 'Yes' });
    const noButton = screen.getByRole('button', { name: 'No' });
    
    expect(yesButton).toBeInTheDocument();
    expect(noButton).toBeInTheDocument();
  });

  test('calls handleYes when yes button is clicked', () => {
    render(<YesNoButtons yesLabel="Yes" noLabel="No" handleYes={mockHandleYes} handleNo={mockHandleNo} />);
    
    const yesButton = screen.getByRole('button', { name: 'Yes' });
    fireEvent.click(yesButton);
    
    expect(mockHandleYes).toHaveBeenCalledTimes(1);
    expect(mockHandleNo).not.toHaveBeenCalled();
  });

  test('calls handleNo when no button is clicked', () => {
    render(<YesNoButtons yesLabel="Yes" noLabel="No" handleYes={mockHandleYes} handleNo={mockHandleNo} />);
    
    const noButton = screen.getByRole('button', { name: 'No' });
    fireEvent.click(noButton);
    
    expect(mockHandleNo).toHaveBeenCalledTimes(1);
    expect(mockHandleYes).not.toHaveBeenCalled();
  });

  test('yes button is highlighted and no button is not highlighted', () => {
    render(<YesNoButtons yesLabel="Yes" noLabel="No" handleYes={mockHandleYes} handleNo={mockHandleNo} />);
    
    const yesButton = screen.getByRole('button', { name: 'Yes' });
    const noButton = screen.getByRole('button', { name: 'No' });
    
    expect(yesButton).toHaveClass('bg-blue-500', 'border-0');
    expect(noButton).toHaveClass('bg-white', 'border-blue-500');
  });
});