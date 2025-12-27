import TextareaAutosizeInternal from 'react-textarea-autosize';
import { twcn } from 'waujs';

interface TextareaAutosizeProps {
  className?: string;
  placeholder?: string;
  minRows?: number;
  maxRows?: number;
  text?: string;
  onChange: (v: string) => void;
}

const TextareaAutosize = ({
  className,
  placeholder = 'Write a message...',
  minRows = 1,
  maxRows = 5,
  text,
  onChange
}: TextareaAutosizeProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };
  return (
    <TextareaAutosizeInternal
      className={twcn(
        'w-full resize-none focus:shadow-none focus:outline-none focus:border-transparent',
        className!
      )}
      placeholder={placeholder}
      minRows={minRows}
      maxRows={maxRows}
      value={text}
      onChange={handleChange}
    />
  );
};

export default TextareaAutosize;
