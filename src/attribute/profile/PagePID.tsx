import { P } from 'src/html';

interface PagePIDProps {
  pid: string;
}

export default function PagePID({ pid }: PagePIDProps) {
  return <P text={`ID: ${pid}`} className="bg-gray-100 text-gray-600 p-1 rounded-lg" />;
}
