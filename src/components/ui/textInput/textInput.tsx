import { Description, Field, Input, Label } from "@headlessui/react";
import { InputPropsType } from "./type";
import { twMerge } from "tailwind-merge";

const TextInput = (props: InputPropsType) => {
  const { 
    className,
    description,
    label,
    disabled,
    clearable=false,
    ...otherProps 
  } = props
  const inputClass = twMerge(
    `block w-full rounded-md border bg-white/5 py-0.5 px-1 text-sm/6 focus:outline-none 
      data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25`,
    disabled && `bg-slate-100`,
    className
  );
  const labelClass = twMerge(
    `text-sm/6 font-medium data-[disabled]:opacity-50`
  );
  const descClass = twMerge(`text-sm/6`);
  const wrapperClass = twMerge(``);
  return (
    <div className="w-full">
      <Field className="flex">
        {
          label &&
          <Label className={labelClass}>
            { label }
          </Label>
        }
        {
          description &&
          <Description className={descClass}>
            { description }
          </Description>
        }
        <Input
          className={inputClass}
          disabled={disabled}
          {...otherProps}
        />
        {
          clearable && 
          <span>X</span>
        }
      </Field>
    </div>
  )
}

export { TextInput };
