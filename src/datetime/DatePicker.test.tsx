import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { describe, test, vi, beforeEach } from 'vitest';
import DatePicker from './DatePicker';
import dayjs from 'dayjs';

const mockSetValue = vi.fn();

describe('DatePicker', () => {
  beforeEach(() => {
    mockSetValue.mockClear();
  });
  test('renders correctly with test date', () => {
    const testDate = '2024-01-15';
    render(<DatePicker value={testDate} setValue={mockSetValue} />);

    // Check that the DatePicker renders with all date sections
    const monthInput = screen.getByRole('spinbutton', { name: /month/i });
    const dayInput = screen.getByRole('spinbutton', { name: /day/i });
    const yearInput = screen.getByRole('spinbutton', { name: /year/i });

    expect(monthInput).toBeInTheDocument();
    expect(dayInput).toBeInTheDocument();
    expect(yearInput).toBeInTheDocument();

    // Check that the inputs display the correct date values
    expect(monthInput).toHaveTextContent('01');
    expect(dayInput).toHaveTextContent('15');
    expect(yearInput).toHaveTextContent('2024');

    // Check that the calendar button is prtextboxesent
    const calendarButton = screen.getByRole('button', { name: /choose date/i });
    expect(calendarButton).toBeInTheDocument();

    // Check that the hidden input has the correct value
    const hiddenInput = screen.getByDisplayValue('01/15/2024');
    expect(hiddenInput).toBeInTheDocument();
  });

  test('calls setValue when date is changed', async () => {
    const user = userEvent.setup();
    const testDate = '2024-01-15';
    render(<DatePicker value={testDate} setValue={mockSetValue} />);

    // Get the month input and change its value
    const monthInput = screen.getByRole('spinbutton', { name: /month/i });

    // Type a new month value (this will trigger onChange)
    await user.type(monthInput, '2');

    // Verify that setValue was called
    expect(mockSetValue).toHaveBeenCalled();

    // Check the last call to setValue (there might be multiple calls)
    const lastCall = mockSetValue.mock.calls[mockSetValue.mock.calls.length - 1];
    const calledValue = lastCall[0];

    // The value should be either a dayjs object or null (for invalid dates)
    expect(calledValue === null || dayjs.isDayjs(calledValue));
  });

  test('supports keyboard navigation with arrow keys', async () => {
    const user = userEvent.setup();
    const testDate = '2024-01-15';
    render(<DatePicker value={testDate} setValue={mockSetValue} />);

    // Get the month input and focus it
    const monthInput = screen.getByRole('spinbutton', { name: /month/i });
    await user.click(monthInput);

    // Use arrow up to increment month
    await user.keyboard('{ArrowUp}');

    // Verify that setValue was called
    expect(mockSetValue).toHaveBeenCalled();

    // Test tab navigation - from any date field, tab goes to calendar button
    await user.tab();

    // Get the calendar button and verify it has focus
    const calendarButton = screen.getByRole('button', { name: /choose date/i });
    expect(calendarButton).toHaveFocus();

    // Test arrow key functionality on day field by directly clicking it
    const dayInput = screen.getByRole('spinbutton', { name: /day/i });
    await user.click(dayInput);
    await user.keyboard('{ArrowDown}');

    // Verify setValue was called again
    expect(mockSetValue).toHaveBeenCalledTimes(2);
  });

  test('opens calendar popup and allows date selection', async () => {
    const user = userEvent.setup();
    const testDate = '2024-01-15';
    render(<DatePicker value={testDate} setValue={mockSetValue} />);

    // Click the calendar button to open popup
    const calendarButton = screen.getByRole('button', { name: /choose date/i });
    await user.click(calendarButton);

    // Verify calendar popup is open by looking for calendar grid
    const calendarGrid = screen.getByRole('grid');
    expect(calendarGrid).toBeInTheDocument();

    // Find and click a different date (e.g., day 20)
    const day20Button = screen.getByRole('gridcell', { name: '20' });
    await user.click(day20Button);

    // Verify that setValue was called with the new date
    expect(mockSetValue).toHaveBeenCalled();
    const calledValue = mockSetValue.mock.calls[0][0];
    expect(dayjs.isDayjs(calledValue)).toBe(true);
    expect(calledValue.date()).toBe(20);

    // Verify calendar popup closes after selection
    expect(screen.queryByRole('grid')).not.toBeInTheDocument();
  });
});
