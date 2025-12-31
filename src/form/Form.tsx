import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import FormButtons from './FormButtons';

interface FormProps {
  children: React.ReactNode;
  className?: string;
  cancelEdit?: ZeroFuncType;
  isLoading?: boolean;
  disabled?: boolean;
  submitLabel?: string;
  cancelLabel?: string;
  isCancelable?: boolean;
}

function Form({
  children,
  className = '',
  cancelEdit = ZeroFunc,
  isLoading = false,
  disabled = false,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  isCancelable = true
}: FormProps) {
  return (
    <form className={twcn('flex flex-col gap-2 w-full', className)}>
      {children}
      <FormButtons
        cancelEdit={cancelEdit}
        isLoading={isLoading}
        disabled={disabled}
        submitLabel={submitLabel}
        cancelLabel={cancelLabel}
        isCancelable={isCancelable}
      />
    </form>
  );
}

export default Form;
