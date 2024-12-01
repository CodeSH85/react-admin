import { Button as HButton } from '@headlessui/react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

import type { ButtonProps } from './type';
import { Icon } from '../icon';

const buttonVariants = cva(
  `
    w-fit h-fit rounded flex items-center gap-1 px-2 py-1
    data-[hover]:bg-opacity-90 data-[active]:bg-opacity-75 transition-all
  `,
  {
    variants: {
      variant: {
        plain: `
          bg-slate-200 text-slate-600
          data-[hover]:bg-slate-100 data-[hover]:text-slate-500
        `,
        outlined: `
          text-blue-500 border border-current
          bg-transparent data-[hover]:bg-blue-100 data-[hover]:text-blue-600
        `,
        flat: `
          bg-blue-500
          data-[hover]:bg-blue-400 data-[active]:bg-sky-700 text-white
        `,
        elevated: 'bg-slate-300 drop-shadow',
        text: `
          bg-transparent 
          data-[hover]:bg-blue-100 text-blue-500
        `
      },
      color: {
        success: `bg-green-300 text-green-300`,
        secondary: `bg-blue-500`,
        error: `bg-red-600`,
        info: `bg-blue-500`
      },
      size: {
        xs: 'text-xs px-1 py-0.5 text-dsm ',
        sm: 'text-sm px-2 py-1',
        md: 'text-md px-3 py-1.5',
        lg: 'text-lg px-4 py-2',
        xl: 'text-xl px-5 py-3',
      }
    },
    compoundVariants: [

    ],
    defaultVariants: {
      variant: 'flat',
      size: 'md',
    },
  }
);

const Button = (props: ButtonProps) => {
  const {
    variant,
    size,
    color,
    prependIcon,
    appendIcon,
    children,
    className: propClassName,
    ...otherProps
  } = props;

  const buttonClass = twMerge(
    buttonVariants({ variant, size, color }),
    propClassName
  );

  return (
    <HButton className={buttonClass} {...otherProps}>
      {prependIcon && <Icon icon={prependIcon} className="mr-1" />}
      {children}
      {appendIcon && <Icon icon={appendIcon} className="ml-1" />}
    </HButton>
  );
};

export { Button };
