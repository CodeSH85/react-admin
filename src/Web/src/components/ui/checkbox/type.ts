import type { Checkbox } from '@base-ui/react/checkbox'

export interface ICheckBoxProps extends Checkbox.Root.Props {
  className?: string
  label?: string
  [key: string]: unknown
}
