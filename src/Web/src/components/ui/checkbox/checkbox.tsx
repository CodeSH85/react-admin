import { useId } from 'react'
import { Checkbox as RawCheckbox } from 'radix-ui'
import type { ICheckBoxProps } from './type'
import { twMerge } from 'tailwind-merge'
import { Icon } from '../icon'

const Checkbox = (props: ICheckBoxProps) => {
  const {
    id,
    label,
    disabled,
    className: propClassName,
    checked,
    onCheckedChange,
    ...otherProps
  } = props

  const defaultId = useId()

  const inputClass = twMerge(
    'w-5 h-5 flex items-center justify-center bg-base-2 dark:bg-dark-bg-base-2 border border-on-bg-base-2 dark:border-dark-on-bg-base-2',
    propClassName
  )

  return (
    <div className="flex align-center items-center gap-md">
      <RawCheckbox.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={inputClass}
        {...otherProps}
        id={id ?? defaultId}
      >
        <RawCheckbox.Indicator className='text-on-bg-base-2 dark:text-dark-on-bg-base-2'>
          <Icon name={checked === 'indeterminate' ? 'mdiMinus' : 'mdiCheck'}></Icon>
        </RawCheckbox.Indicator>
      </RawCheckbox.Root>
      {
        label &&
          <label className="" htmlFor={id ?? defaultId}>
            { label }
          </label>
      }
    </div>
  )
}

export { Checkbox }
