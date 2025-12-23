import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, beforeEach, expect, vi } from 'vitest';
import SaveCancelButtons from './SaveCancelButtons';

const mockOnSave = vi.fn();
const mockOnCancel = vi.fn();

describe('SaveCancelButtons', () => {
  beforeEach(() => {
    mockOnSave.mockClear();
    mockOnCancel.mockClear();
  });

  test('renders with basic props', () => {
    render(
      <SaveCancelButtons
        saveLabel="Save"
        cancelLabel="Cancel"
        onSave={mockOnSave}
        onCancel={mockOnCancel}
      />
    );

    const saveButton = screen.getByRole('button', { name: 'Save' });
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });

    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test('calls onSave when save button is clicked', () => {
    render(
      <SaveCancelButtons
        saveLabel="Save"
        cancelLabel="Cancel"
        onSave={mockOnSave}
        onCancel={mockOnCancel}
      />
    );

    const saveButton = screen.getByRole('button', { name: 'Save' });
    fireEvent.click(saveButton);

    expect(mockOnSave).toHaveBeenCalledTimes(1);
    expect(mockOnCancel).not.toHaveBeenCalled();
  });

  test('calls onCancel when cancel button is clicked', () => {
    render(
      <SaveCancelButtons
        saveLabel="Save"
        cancelLabel="Cancel"
        onSave={mockOnSave}
        onCancel={mockOnCancel}
      />
    );

    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);

    expect(mockOnCancel).toHaveBeenCalledTimes(1);
    expect(mockOnSave).not.toHaveBeenCalled();
  });

  test('save button is highlighted and cancel button is cancelt highlighted', () => {
    render(
      <SaveCancelButtons
        saveLabel="Save"
        cancelLabel="Cancel"
        onSave={mockOnSave}
        onCancel={mockOnCancel}
      />
    );

    const saveButton = screen.getByRole('button', { name: 'Save' });
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });

    expect(saveButton).toHaveClass('bg-blue-500', 'border-0');
    expect(cancelButton).toHaveClass('bg-white', 'border-blue-500');
  });
});
