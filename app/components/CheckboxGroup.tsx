import React, { FC } from "react";
import { useWatch, useController } from "react-hook-form";

interface CheckboxGroupProps {
  config: any;
  control: any;
  label: string;
  name: string;
  options: any;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  config,
  control,
  label,
  name,
  options,
  ...rest
}) => {
  const {
    field: { ref, value, onChange, ...inputProps },
    formState: { errors },
  } = useController({
    name,
    control,
    defaultValue: [],
  });

  const checkboxIds = useWatch({ control, name: name }) || [];

  const handleChange = (value: string) => {
    const newArray = [...checkboxIds];
    newArray.push(value);
    onChange("");
    onChange(value);
  };
  return (
    <div className="grid grid-cols-2 md:block">
      {options.map((option: any) => (
        <label
          key={option.value}
          className="text-xs md:mr-4 text-center inline-flex items-center mb-4"
        >
          <input
            type="checkbox"
            {...rest}
            {...inputProps}
            checked={value === option.value}
            onChange={() => handleChange(option[config.value])}
            className="mr-1 rounded-full focus:ring-transparent accent-gray-700  bg-grey-700 text-black"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
