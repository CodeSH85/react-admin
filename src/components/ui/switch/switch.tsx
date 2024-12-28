import { Switch as HSwitch, Field, Label, Description } from '@headlessui/react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { SwitchPropType } from './type';
import clsx from 'clsx';

const switchVariants = cva(
  `
    group relative flex min-h-6 min-w-12 cursor-pointer rounded-full 
    p-1 transition-colors duration-200 ease-in-out
    focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-primary
  `,
  {
    variants: {
      checked: {
        true: 'bg-primary',
        false: 'bg-slate-400',
      },
      disabled: {
        true: 'bg-slate-400/40',
      },
    },
    defaultVariants: {
      checked: false
    },
  }
);

const Switch = (props: SwitchPropType) => {
  const {
    checked,
    disabled,
    children,
    label,
    description,
    className: propClassName,
    ...otherProps
  } = props;
  const switchClass = twMerge(
    switchVariants({ checked, disabled }),
    propClassName
  );
  return (
    <Field>
      <Label
        className='text-black dark:text-white'
      >
        { label }
      </Label>
      <Description>{ description }</Description>
      <HSwitch
        checked={checked}
        disabled={disabled}
        className={switchClass}
        {...otherProps}
      >
        {
          children ??
          <span
            aria-hidden='true'
            className={
              clsx(
                `bg-white pointer-events-none inline-block size-4 translate-x-0 rounded-full shadow-lg
                ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-6 
                dark:shadow-none dark:ring-0 dark:group-data-[checked]:translate-x-6`,
                disabled && 'bg-gray-200'
              )
            }
          />
        }
      </HSwitch>
    </Field>
  );
};

export { Switch };
