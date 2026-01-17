import { twcn } from 'waujs';

interface NotFoundProps {
  label: string;
  className?: string;
}

function NotFound({ label, className = '' }: NotFoundProps) {
  return (
    <div
      className={twcn('NotFound bg-white p-2 text-gray-600 text-lg rounded-lg w-full', className)}
    >
      {label}
    </div>
  );
}

export default NotFound;
