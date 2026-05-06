import type { Select } from 'radix-ui'
import { LegacyRef } from 'react'

export interface ISelectTriggerProps extends Select.SelectTriggerProps {
  readonly?: boolean
  placeholder?: string
  disabled?: boolean
}

export interface ISelectItemProps extends Select.SelectItemProps {
  ref?: LegacyRef<HTMLDivElement> | undefined
  label?: string
}

export interface ISelectContentProps {
  items?: ISelectItemProps[]
}

export interface ISelectProps extends Select.SelectProps, ISelectContentProps {
  readonly?: boolean
  placeholder?: string
}
