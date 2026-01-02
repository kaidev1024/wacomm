import { twcn } from 'waujs';
import loadingGifUrl from './loading.gif';
import Image from '../html/Image';

interface LoadingIconProps {
  className?: string;
}

function LoadingIcon({ className = '' }: LoadingIconProps) {
  return <Image src={loadingGifUrl} alt="loading" className={twcn('LoadingIcon w-5', className)} />;
}

export default LoadingIcon;
