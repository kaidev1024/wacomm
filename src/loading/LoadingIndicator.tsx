import { twcn } from 'waujs';
import loadingGifUrl from './loading.gif';
import Img from '../html/Img';
import { StaticRow } from 'src/static';

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
    <StaticRow className={twcn('LoadingIndicator', className)}>
      <Img src={loadingGifUrl} alt="loading" className={twcn('w-5', imgClassName)} />
      <div className={twcn('ml-2', labelClassName)}>{label}</div>
    </StaticRow>
  );
}

export default LoadingIndicator;
