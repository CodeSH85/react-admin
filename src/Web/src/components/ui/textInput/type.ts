
export interface IInputPropsType {
  id?: string
  name?: string
  label?: string
  type?: 'number' | 'text'
  value?: any
  defaultValue?: string | number
  description?: string | number
  clearable?: boolean
  disabled?: boolean
  readonly?: boolean
  children?: React.ReactNode
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}
