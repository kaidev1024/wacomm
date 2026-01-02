import { twcn } from 'waujs';
import { Img } from './html';

interface LetterAvatarProps {
  letter?: string;
  className?: string;
  imgSrc?: string;
}

function LetterAvatar({
  letter = 'N',
  className = 'w-full h-full',
  imgSrc = ''
}: LetterAvatarProps) {
  if (imgSrc) {
    return <Img className="rounded-full w-full h-full" src={imgSrc} alt={letter} />;
  }
  return (
    <div
      className={twcn(
        'LetterAvatar flex items-center justify-center rounded-full w-full h-full bg-blue-300 text-white font-bold',
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
        aria-label={letter.charAt(0).toUpperCase()}
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
          {letter.charAt(0).toUpperCase()}
        </text>
      </svg>
    </div>
  );
}

export default LetterAvatar;
