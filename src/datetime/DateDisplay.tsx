interface DateDisplayProps {
  date: string;
}

export default function DateDisplay({ date }: DateDisplayProps) {
  if (!date || date.length < 10) return null;
  return <div className="text-gray-600 text-sm">{date.substring(0, 10)}</div>;
}