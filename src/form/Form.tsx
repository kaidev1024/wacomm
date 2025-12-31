import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import FormButtons from './FormButtons';

interface FormProps {
  children: React.ReactNode;
  className?: string;
  onSubmit?: ZeroFuncType;
  onCancel?: ZeroFuncType;
  isLoading?: boolean;
  disabled?: boolean;
  submitLabel?: string;
  cancelLabel?: string;
  isCancelable?: boolean;
}

function Form({
  children,
  className = '',
  onSubmit = ZeroFunc,
  onCancel = ZeroFunc,
  isLoading = false,
  disabled = false,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  isCancelable = true
}: FormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className={twcn('flex flex-col gap-2 w-full', className)}
    >
      {children}
      <FormButtons
        onCancel={onCancel}
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
