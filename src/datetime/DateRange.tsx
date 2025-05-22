import dayjs from "dayjs";
import { formatDateTimeRange } from "./dateTimeFormatter";
import { twcn } from 'pujs';

interface DateRangeProps {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
  className?: string;
}

function DateRange({
  startDate,
  endDate,
  className = '',
}: DateRangeProps) {
  return (
    <div className={twcn("text-gray-666 text-sm", className)}>{formatDateTimeRange(startDate, endDate)}</div>
  );
}

export default DateRange;