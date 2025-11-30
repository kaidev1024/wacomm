import { twcn } from 'waujs';

interface LetterAvatarProps {
  letter: string;
  className?: string;
}

function LetterAvatar({ letter = 'A', className = 'w-10 h-10' }: LetterAvatarProps) {
  return (
    <div
      className={twcn(
        'flex items-center justify-center p-1rounded-full bg-gray-300 text-white font-bold',
        className
      )}
    >
      {letter.charAt(0).toUpperCase()}
    </div>
  );
}

export default LetterAvatar;
