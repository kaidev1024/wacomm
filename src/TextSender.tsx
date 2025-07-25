import { useState } from 'react';
import { SendIcon } from 'src/icons';

interface TextSenderProps {
  onClick: (text: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
}

export default function TextSender({
  onClick,
  placeholder = 'Type your message...',
  className = '',
  rows = 2,
}:TextSenderProps) {
  const [text, setText] = useState('');

  const handleClick = () => {
    if (text.trim()) {
      onClick(text);
      setText('');
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <textarea
        className="w-full border rounded px-2 py-1 pr-10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={rows}
        placeholder={placeholder}
      />
      <div className="absolute right-2 top-1/2">
        <SendIcon
          onClick={handleClick}
          isHighlighted={!!text.trim()}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
