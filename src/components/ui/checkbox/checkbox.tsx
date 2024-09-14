'use client';

import { useState } from 'react';
import { Checkbox as HCheckbox } from '@headlessui/react';
import type { CheckBoxProps } from "./type";
import { twMerge } from "tailwind-merge";

const Checkbox = (props: CheckBoxProps) => {
  const { className, ...rest } = props;
  const [enabled, setEnabled] = useState(false)
  const inputClass = twMerge(
    'group block size-4 rounded border bg-white data-[checked]:bg-blue-500',
    className 
  )
  return (
    <HCheckbox
      checked={enabled}
      onChange={setEnabled}
      className={inputClass}
      {...rest}
    >
      {/* Checkmark icon */}
      <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
        <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </HCheckbox>
  )
}

export { Checkbox };
