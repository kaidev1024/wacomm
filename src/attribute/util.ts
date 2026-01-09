export interface AttributeEditProps<T> {
  value: T;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: T) => void;
  className?: string;
}

export interface AttributeDisplayProps<T> {
  value: T;
}
