import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import { ElementType } from 'react';
import { SvgSize } from 'wasvg';
import { Container } from 'src/containers';

export interface IconProps {
  Svg: ElementType;
  className?: string;
  size?: SvgSize;
}

interface SvgTagProps {
  label?: string;
  isVertical?: boolean;
  isHighlighted?: boolean;
  className?: string;
  onClick?: ZeroFuncType;
  icon: IconProps;
  labelClassName?: string;
  isLabelHidden?: boolean;
}

const getClassName = (isVertical: boolean, isHighlighted: boolean) => {
  let ret = 'py-0.5 px-2 gap-2';
  if (isVertical) ret = twcn(ret, 'items-center py-1 px-2 border-b-2 border-white');
  if (isHighlighted) {
    if (isVertical) ret = twcn(ret, 'border-blue-500');
    else ret = `${ret} bg-blue-200 rounded-full`;
  }
  return ret;
};

const getLabelClassName = (isVertical: boolean, isHighlighted: boolean) => {
  let ret = 'text-gray-600 text-sm';
  if (isHighlighted) ret = 'text-blue-500';
  if (isVertical) ret = twcn(ret, 'text-xs -mt-3');
  return ret;
};

function SvgTag({
  label = '',
  isVertical = false,
  isHighlighted = false,
  className = '',
  icon: {
    Svg,
    className: svgClassName = '',
    size: svgSize = SvgSize.lg,
  },
  labelClassName = '',
  isLabelHidden = false,
  onClick = ZeroFunc,
}: SvgTagProps) {
  return (
    <Container
      className={twcn(getClassName(isVertical!, isHighlighted!), className)}
      isVertical={isVertical}
      onClick={onClick}
    >
      <Svg className={twcn(`${isHighlighted ? 'fill-blue-500 text-blue-500' : 'fill-gray-600'}`, svgClassName)} size={svgSize} />
      {!isLabelHidden && label && (
        <div className={twcn(getLabelClassName(isVertical!, isHighlighted!), labelClassName)}>
          {label}
        </div>
      )}
    </Container>
  );
}

export default SvgTag;
