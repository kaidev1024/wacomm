interface MiddleDotProps {
  className?: string;
}

export default function MiddleDot({ className = 'text-gray-300' }: MiddleDotProps) {
  return <span className={className}>·</span>;
}
