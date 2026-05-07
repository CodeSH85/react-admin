import type { Checkbox } from 'radix-ui'

export interface ICheckBoxProps extends Checkbox.CheckboxProps {
  className?: string
  label?: string
  [key: string]: unknown
}
