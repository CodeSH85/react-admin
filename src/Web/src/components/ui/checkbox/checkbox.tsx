import { useId } from 'react'
import { Checkbox as RawCheckbox } from '@base-ui/react/checkbox'
import { MdCheck, MdIndeterminateCheckBox } from 'react-icons/md'
import type { ICheckBoxProps } from './type'
import { cn } from '@/utils'

const Checkbox = (props: ICheckBoxProps) => {
  const {
    id,
    label,
    disabled,
    className: propClassName,
    checked,
    indeterminate,
    onCheckedChange,
    ...otherProps
  } = props

  const defaultId = useId()

  const inputClass = cn(
    'w-4 h-4 appearance-none flex items-center justify-center bg-base-2 dark:bg-dark-bg-base-2 border border-on-bg-base-2 dark:border-dark-on-bg-base-2',
    propClassName
  )

  return (
    <div className="flex align-center items-center gap-md">
      <RawCheckbox.Root
        checked={checked}
        indeterminate={indeterminate}
        defaultChecked
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={inputClass}
        {...otherProps}
        id={id ?? defaultId}
      >
        <RawCheckbox.Indicator className='text-on-bg-base-2 dark:text-dark-on-bg-base-2'>
          {
            indeterminate
              ? <MdIndeterminateCheckBox></MdIndeterminateCheckBox>
              : <MdCheck></MdCheck>
          }
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
