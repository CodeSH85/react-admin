import { Button as RawButton } from '@base-ui/react/button'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils'

import type { ButtonProps } from './type'

const buttonVariants = cva(
  `
    w-fit h-fit rounded flex items-center active:bg-opacity-75 transition-all cursor-pointer
    bg-clip-padding 
    focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 
    outline-none select-none 
    active:not-aria-[haspopup]:translate-y-px 
    disabled:pointer-event-none disabled:cursor-auto disabled:opacity-50
    aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 
    [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
  `,
  {
    variants: {
      color: {
        primary: 'bg-primary text-on-primary dark:bg-dark-primary dark:text-on-primary hover:bg-hover-primary dark:hover:bg-dark-hover-primary',
        secondary: 'bg-secondary text-on-secondary dark:bg-dark-secondary hover:bg-hover-secondary dark:hover:bg-dark-hover-secondary',
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
        xs: 'text-xs px-2 py-1',
        sm: 'text-sm px-2 py-1',
        md: 'text-md px-2 py-1',
        lg: 'text-md px-2.5 py-1.5',
        xl: 'text-xl px-2.5 py-1.5'
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
    <RawButton
      className={buttonClass}
      data-slot='button'
      {...otherProps}
    >
      {prependIcon}
      {children}
      {appendIcon}
    </RawButton>
  )
}

export { Button }
