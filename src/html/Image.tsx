import React from 'react';
import { ZeroFunc, ZeroFuncType } from 'waujs';

interface ImageProps {
  ref: React.Ref<HTMLImageElement>;
  src: string;
  alt: string;
  className?: string;
  onClick?: ZeroFuncType;
  style?: Object;
  onLoad?: any;
}

function Image({
  src,
  alt,
  ref = null,
  className = '',
  onClick = ZeroFunc,
  style = undefined,
  onLoad = undefined
}: ImageProps) {
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      style={style}
      className={className}
      onClick={onClick}
      onLoad={onLoad}
    />
  );
}

export default Image;
