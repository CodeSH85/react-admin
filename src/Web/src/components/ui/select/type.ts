import type { Select } from '@base-ui/react/select'

export interface ISelectTriggerProps
  extends Select.Trigger.Props,
  Pick<Select.Value.Props, 'placeholder'>
{
  clearable?: boolean
  onClearValue?: (e: React.MouseEvent) => void
  hasValue?: boolean
}

export interface ISelectItemProps<Value> {
  label: string
  value: Value
  disabled?: boolean
}

export interface ISelectContentProps<Value = unknown> extends
  Select.Popup.Props,
  Pick<Select.Root.Props<Value, boolean>, 'items'>,
  Pick<Select.Positioner.Props, 'alignOffset' | 'alignItemWithTrigger'>
{
}

export interface ISelectProps<Value, Multiple extends boolean | undefined> extends
  Pick<ISelectTriggerProps, 'placeholder' | 'clearable'>,
  Select.Root.Props<Value, Multiple>
{
  label?: string
  items: ISelectItemProps<Value>[]
  filterable?: boolean
  width?: number | string
}
