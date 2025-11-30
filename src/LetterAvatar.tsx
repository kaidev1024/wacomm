import { twcn } from 'waujs';

interface LetterAvatarProps {
  letter?: string;
  className?: string;
}

function LetterAvatar({ letter = 'A', className = 'w-full h-full' }: LetterAvatarProps) {
  return (
    <div
      className={twcn(
        'flex items-center justify-center rounded-full bg-blue-300 text-white font-bold',
        className
      )}
    >
      {letter.charAt(0).toUpperCase()}
    </div>
  );
}

export default LetterAvatar;
