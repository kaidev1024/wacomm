import { twcn } from 'waujs';
import loadingGifUrl from './loading.gif';
import Img from '../Img';

interface LoadingIconProps {
  className?: string;
}

function LoadingIcon({ className = '' }: LoadingIconProps) {
  return <Img src={loadingGifUrl} alt="loading" className={twcn('LoadingIcon w-5', className)} />;
}

export default LoadingIcon;
