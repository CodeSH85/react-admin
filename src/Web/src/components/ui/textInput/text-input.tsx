import { useId } from 'react'
import { Input as RawInput } from '@base-ui/react/input'
import type { IInputPropsType } from './type'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils'

const inputVariants = cva(
  `
    block w-full min-w-0 rounded-md bg-white/5 py-0.5 px-1 text-md transition-colors
    focus:outline-hidden 
    border border-input-border dark:border-dark-input-border
    outline-none focus-visible:border-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 
    dark:bg-dark-bg-base-1 dark:text-white 
    data-focus:outline-white/25 dark:disabled:bg-input/80 
    disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm
    dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40
  `,
  {
    variants: {
      variant: {
        filled: 'border-transparent',
        outlined: 'border-current'
      },
      disabled: {
        true: 'bg-slate-100 dark:bg-slate-800'
      },
      readonly: {
        true: 'bg-current'
      }
    },
    defaultVariants: {
    }
  }
)

const TextInput = (props: IInputPropsType) => {
  const {
    className: propClassName,
    disabled = false,
    readonly = false,
    id: propId,
    ...otherProps
  } = props

  const inputClass = cn(
    inputVariants({ disabled, readonly }),
    propClassName
  )

  const id = propId ?? useId()

  return (
    <RawInput
      id={id}
      className={inputClass}
      disabled={disabled}
      {...otherProps}
    />
  )
}

export { TextInput }
