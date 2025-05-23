import { FieldValues, FieldErrors, UseFormRegister } from 'react-hook-form';
import { twcn } from 'pujs';

interface InputProps {
  name: string;
  type?: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
}

export enum InputType {
  Text = 'text',
  Email = 'email',
  Password = 'password',
};

function Input({
  name,
  type = InputType.Text,
  placeholder,
  register,
  errors,
  className = '',
  defaultValue = '',
  disabled = false,
}: InputProps) {
  const errorMessage = errors[name]?.message as string;

  return (
    <>
      <input
        className={twcn('Input rounded px-1 py-0 w-full text-gray-600 border-gray-300', className)}
        type={type}
        placeholder={placeholder}
        {...register(name, { value: defaultValue })}
        disabled={disabled}
      />
      {errorMessage && <p className="pl-3 text-red-600">{errorMessage}</p>}
    </>
  );
}

export default Input;
