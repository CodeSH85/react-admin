import { useId } from 'react'
import { cva } from 'class-variance-authority'
import { Icon } from '../icon'
import { Button } from '../button'
import type { IInputPropsType } from './type'
import { cn } from '@/utils'

const inputVariants = cva(
  `
    block w-full rounded-md border bg-white/5 py-0.5 px-1 
    text-sm/6 focus:outline-hidden
    outline-2 outline-white/25
    dark:bg-dark-bg-base-1 dark:border-transparent dark:text-white
    data-focus:outline-2 data-focus:-outline-offset-2 
    data-focus:outline-white/25
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
    description,
    label,
    disabled = false,
    readonly = false,
    clearable = false,
    id: propId,
    ...otherProps
  } = props

  const inputClass = cn(
    inputVariants({ disabled, readonly }),
    propClassName
  )

  const wrapperClass = cn(
    'w-auto flex items-center gap-sm'
  )

  const labelClass = cn(
    'text-sm/6 font-medium data-disabled:opacity-50 dark:text-white'
  )

  const descClass = cn('text-sm/6')

  const id = propId ?? useId()

  return (
    <div className={wrapperClass}>
      {
        label &&
          <div className={labelClass}>
            { label }
          </div>
      }
      {
        description &&
          <div className={descClass}>
            { description }
          </div>
      }
      <input
        id={id}
        className={inputClass}
        disabled={disabled}
        {...otherProps}
      />
      {
        clearable &&
        <Button variant='plain' className="">
          <Icon name='mdiClose'></Icon>
        </Button>
      }
    </div>
  )
}

export { TextInput }
