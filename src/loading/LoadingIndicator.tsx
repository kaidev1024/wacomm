import { twcn } from 'waujs';
import loadingGifUrl from './loading.gif';
import Img from '../Img';
import { Row } from 'src/containers';

interface LoadingIndicatorProps {
  className?: string;
  imgClassName?: string;
  labelClassName?: string;
  label?: string;
}

function LoadingIndicator({
  className = '',
  label = 'Loading...',
  imgClassName = '',
  labelClassName = ''
}: LoadingIndicatorProps) {
  return (
    <Row className={twcn('LoadingIndicator', className)}>
      <Img src={loadingGifUrl} alt="loading" className={twcn('w-5', imgClassName)} />
      <div className={twcn('ml-2', labelClassName)}>{label}</div>
    </Row>
  );
}

export default LoadingIndicator;
