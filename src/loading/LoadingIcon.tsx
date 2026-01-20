import { twcn } from 'waujs';
import loadingGifUrl from './loading.gif';
import { StaticImg } from 'src/static';

interface LoadingIconProps {
  className?: string;
}

function LoadingIcon({ className = '' }: LoadingIconProps) {
  return (
    <StaticImg src={loadingGifUrl} alt="loading" className={twcn('LoadingIcon w-5', className)} />
  );
}

export default LoadingIcon;
