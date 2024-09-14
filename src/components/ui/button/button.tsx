import { Button as HButton } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import type { ButtonProps, ButtonVariant } from './type';
import type { Size } from '../type';
import { Icon } from '../icon/index';

const Button = (props: ButtonProps) => {
  const {
    variant='flat',
    size='md',
    prependIcon,
    appendIcon,
    children,
    className: propClassName,
    ...otherProps
  } = props;

  const buttonDefaultClass = `
    w-fit h-fit rounded px-2 py-1 bg-blue-500 flex items-center
    gap-1 text-white data-[hover]:bg-blue-400 data-[active]:bg-sky-700
  `

  const variantMap: { [key in ButtonVariant]: string } = {
    plain: `bg-slate-200 text-slate-600 
      data-[hover]:bg-slate-100 data-[hover]:text-slate-500`,
    outlined: `text-blue-500 border border-current 
      bg-transparent data-[hover]:bg-blue-100 data-[hover]:text-blue-600`,
    flat: `w-fit h-fit rounded px-2 py-1 bg-blue-500 
      text-white data-[hover]:bg-blue-400 data-[active]:bg-sky-700`,
    elevated: 'drop-shadow',
    text: 'bg-transparent data-[hover]:bg-blue-100 text-blue-500'
  }
  const sizeMap: { [key in Size]: string } = {
    xs: 'text-xs px-1',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl px-3'
  }

  const buttonClass = twMerge(
    buttonDefaultClass, 
    propClassName,
    variant && variantMap[variant],
    size && sizeMap[size]
  )

  return (
    <HButton
      className={buttonClass}
      {...otherProps}
    >
      {
        prependIcon && 
          <Icon icon={prependIcon}></Icon>
      }
      { children }
      {
        appendIcon && 
          <Icon icon={appendIcon}></Icon>
      }
    </HButton>
  )
}

export { Button }
