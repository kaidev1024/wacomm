import { Column, Row } from '.';

interface ContainerProps {
  children: any;
  className?: string;
  isVertical?: boolean;
}

function Container({ children, className = '', isVertical = false }: ContainerProps) {
  if (isVertical) {
    return <Column className={className}>{children}</Column>;
  }
  return <Row className={className}>{children}</Row>;
}

export default Container;
