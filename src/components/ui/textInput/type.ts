import { InputProps } from "@headlessui/react"

export type InputPropsType = {
  id?: string
  name?: string
  label?: string 
  type?: 'number' | 'text'
  description?: string | number
  defaultValue?: string | number
  clearable?: boolean
  value?: any
  children?: React.ReactNode
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
} & InputProps
