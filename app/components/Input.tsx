import { FC } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  label?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  id,
  register,
  disabled,
  label,
  required,
  type = "text",
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-500 mt-4"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          id={id}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeholder}
          {...register(id, { required })}
          className="form-input
          block 
          w-full
          border-0
          border-b-2
          py-1.5
          text-gray-900
          ring-1
          ring-insert
          ring-transparent
          placeholder:text-gray-400
          focus:ring-2
          focus:ring-insert
          focus:ring-transparent
          focus:border-black
          sm:text-sm
          sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
