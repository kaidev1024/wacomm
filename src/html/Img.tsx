import React from 'react';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import ClickableDiv from './ClickableDiv';

interface ImgProps {
  src: string;
  alt: string;
  ref?: React.Ref<HTMLImageElement>;
  className?: string;
  onClick?: ZeroFuncType;
  style?: Object;
  onLoad?: any;
}

function Img({
  src,
  alt,
  ref = null,
  className = '',
  onClick = ZeroFunc,
  style = undefined,
  onLoad = undefined
}: ImgProps) {
  return (
    <ClickableDiv>
      <img
        ref={ref}
        src={src}
        alt={alt}
        style={style}
        className={className}
        onClick={onClick}
        onLoad={onLoad}
      />
    </ClickableDiv>
  );
}

export default Img;
