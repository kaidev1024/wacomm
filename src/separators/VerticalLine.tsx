interface VerticalLineProps {
  className?: string;
}

export default function VerticalLine({ className = 'text-gray-300' }: VerticalLineProps) {
  return <span className={className}>|</span>;
}
