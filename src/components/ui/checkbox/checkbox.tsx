'use client';

import { useState } from 'react';
import { Checkbox as HCheckbox, Field, Label } from '@headlessui/react';
import type { CheckBoxProps } from "./type";
import { twMerge } from "tailwind-merge";

const Checkbox = (props: CheckBoxProps) => {
  const {
    label,
    disabled,
    className: propClassName,
    ...otherProps
  } = props;
  const [enabled, setEnabled] = useState(false);
  const inputClass = twMerge(
    'group block size-4 rounded border bg-white data-[checked]:bg-blue-500',
    propClassName
  );
  return (
    <Field className='flex items-center gap-2'>
      <HCheckbox
        checked={enabled}
        onChange={setEnabled}
        disabled={disabled}
        className={inputClass}
        {...otherProps}
      >
        <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
          <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </HCheckbox>
      <Label className={'dark:text-white'}>
        {label}
      </Label>
    </Field>
  )
}

export { Checkbox };
