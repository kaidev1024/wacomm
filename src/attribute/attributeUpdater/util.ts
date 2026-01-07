export interface ProfileAttributeEditElementProps<T> {
  value: T;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: T) => void;
  className?: string;
}

export interface ProfileAttributeDisplayElementProps<T> {
  value: T;
}
