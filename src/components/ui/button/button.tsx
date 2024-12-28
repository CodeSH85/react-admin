import { Button as HButton } from '@headlessui/react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

import type { ButtonProps } from './type';
import { Icon } from '../icon';

const buttonVariants = cva(
  `
    w-fit h-fit rounded flex items-center gap-1
    data-[hover]:bg-opacity-90 data-[active]:bg-opacity-75 transition-all
  `,
  {
    variants: {
      color: {
        primary: ['bg-primary text-on-primary dark:bg-primary dark:text-on-primary'],
        secondary: 'bg-secondary',
        success: 'bg-success',
        error: 'bg-error text-on-error',
        current: 'bg-current',
        info: ''
      },
      variant: {
        plain: ``,
        outlined: `
          border border-current bg-surface dark:bg-slate-700/10 text-current
        `,
        flat: ``,
        elevated: 'drop-shadow', 
        text: `
          bg-surface dark:bg-slate-700/10 text-current 
        `
      },
      rounded: {
        normal: "rounded",
        full: "rounded-full"
      },
      size: {
        xs: 'text-xs px-1 py-0.5',
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
      color: 'primary',
      rounded: 'normal',
      size: 'md',
    },
  }
);

const Button = (props: ButtonProps) => {
  const {
    variant,
    size,
    color,
    rounded,
    prependIcon,
    appendIcon,
    children,
    className: propClassName,
    ...otherProps
  } = props;

  const buttonClass = twMerge(
    buttonVariants({ variant, size, color }),
    propClassName,
  );

  return (
    <HButton 
      className={buttonClass} 
      {...otherProps}
    >
      {prependIcon && <Icon icon={prependIcon} className="mr-1" />}
      {children}
      {appendIcon && <Icon icon={appendIcon} className="ml-1" />}
    </HButton>
  );
};

export { Button };
