import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import { Img } from '../html';

interface AvatarProps {
  letter?: string;
  className?: string;
  imgSrc?: string;
  onClick?: ZeroFuncType;
}

function Avatar({
  letter = 'N',
  className = 'w-full h-full',
  imgSrc = '',
  onClick = ZeroFunc
}: AvatarProps) {
  if (imgSrc) {
    return (
      <Img
        className="Avatar rounded-full w-full h-full"
        src={imgSrc}
        alt={letter}
        onClick={onClick}
      />
    );
  }
  return (
    <div
      className={twcn(
        'Avatar flex items-center justify-center rounded-full w-full h-full bg-blue-300 text-white font-bold',
        className
      )}
    >
      {/* SVG scales the glyph to fill the container */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        height="100%"
        role="img"
        aria-label={letter}
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="inherit"
          fontWeight="700"
          fontSize="80"
          fill="currentColor"
        >
          {letter}
        </text>
      </svg>
    </div>
  );
}

export default Avatar;
