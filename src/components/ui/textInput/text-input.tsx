import { Description, Field, Input, Label } from "@headlessui/react";
import { InputPropsType } from "./type";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const labelClass = twMerge(
  `text-sm/6 font-medium data-[disabled]:opacity-50 dark:text-white`
);
const descClass = twMerge(`text-sm/6`);

const inputVariants = cva(
  `
    block w-full rounded-md border bg-white/5 py-0.5 px-1 
    text-sm/6 focus:outline-none
    outline-2 outline-white/25
    dark:bg-slate-600 dark:border-transparent dark:text-white
    data-[focus]:outline-2 data-[focus]:-outline-offset-2 
    data-[focus]:outline-white/25
  `,
  {
    variants: {
      variant: {
        filled: `border-transparent`,
        outlined: `border-current`
      },
      disabled: {
        true: 'bg-slate-100 dark:bg-slate-800'
      }
    }, 
    defaultVariants: {
    }
  }
);

const TextInput = (props: InputPropsType) => {
  const {
    className: propClassName,
    description,
    label,
    disabled=false,
    clearable=false,
    ...otherProps 
  } = props

  const inputClass = twMerge(
    inputVariants({ disabled }),
    propClassName
  );

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
        >
        </Input>
      </Field>
    </div>
  )
}

export { TextInput };
