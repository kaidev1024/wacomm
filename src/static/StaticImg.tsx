import React from 'react';

export interface StaticImgProps {
  src: string;
  alt: string;
  ref?: React.Ref<HTMLImageElement>;
  className?: string;
  style?: Object;
  onLoad?: any;
}

function StaticImg({
  src,
  alt,
  ref = null,
  className = '',
  style = undefined,
  onLoad = undefined
}: StaticImgProps) {
  return <img ref={ref} src={src} alt={alt} style={style} className={className} onLoad={onLoad} />;
}

export default StaticImg;
