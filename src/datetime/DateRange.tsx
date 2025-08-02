import dayjs from 'dayjs';
import { formatDateTimeRange } from './dateTimeFormatter';
import { twcn } from 'waujs';

interface DateRangeProps {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
  className?: string;
}

function DateRange({ startDate, endDate, className = '' }: DateRangeProps) {
  return (
    <div className={twcn('text-gray-600 text-sm', className)}>
      {formatDateTimeRange(startDate, endDate)}
    </div>
  );
}

export default DateRange;
