interface NotFoundProps {
  label: string;
}

function NotFound({ label }: NotFoundProps) {
  return <div className="bg-white p-2 text-gray-600 text-lg rounded-lg">{label}</div>;
}

export default NotFound;