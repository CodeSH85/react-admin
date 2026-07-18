import { cva } from 'class-variance-authority'
import type { ButtonProps } from './type'
import { Icon } from '../icon'
import { cn } from '@/utils'

const buttonVariants = cva(
  `
    w-fit h-fit rounded flex items-center active:bg-opacity-75 transition-all cursor-pointer
  `,
  {
    variants: {
      color: {
        primary: 'bg-primary text-on-primary dark:bg-dark-primary dark:text-on-primary hover:bg-hover-primary dark:hover:bg-dark-hover-primary',
        secondary: 'bg-secondary text-on-secondary dark:bg-dark-secondary',
        success: 'bg-success',
        error: 'bg-error text-on-error',
        current: 'bg-current',
        info: ''
      },
      variant: {
        plain: 'bg-color-current',
        outlined: 'border border-current bg-surface dark:bg-slate-700/10 text-current',
        flat: 'active:bg-opacity-75',
        elevated: 'drop-shadow-sm',
        text: 'bg-surface dark:bg-slate-700/10 text-current'
      },
      size: {
        xs: 'text-xs px-1 py-0.5',
        sm: 'text-sm px-2 py-1',
        md: 'text-md px-3 py-1.5',
        lg: 'text-lg px-4 py-2',
        xl: 'text-xl px-5 py-3'
      },
      rounded: {
        normal: 'rounded-sm',
        full: 'rounded-full'
      },
      icon: {
        true: `
          p-1 bg-transparent hover:bg-gray-900/5 active:bg-gray-900/5
           dark:hover:bg-white/10 dark:active:bg-white/20
        `,
        false: ''
      }
    },
    compoundVariants: [
      {

      }
    ],
    defaultVariants: {
      variant: 'flat',
      color: 'primary',
      rounded: 'normal',
      size: 'md'
    }
  }
)

const Button = (props: ButtonProps) => {
  const {
    variant,
    size,
    color,
    rounded,
    prependIcon,
    appendIcon,
    icon,
    children,
    className: propClassName,
    ...otherProps
  } = props

  const buttonClass = cn(
    buttonVariants({ variant, size, color, icon, rounded }),
    propClassName
  )

  return (
    <button
      className={buttonClass}
      {...otherProps}
    >
      {prependIcon && <Icon name={prependIcon} className="mr-1" />}
      {children}
      {appendIcon && <Icon name={appendIcon} className="ml-1" />}
    </button>
  )
}

export { Button }
