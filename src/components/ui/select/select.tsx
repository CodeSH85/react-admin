import { Select as RawSelect } from 'radix-ui'
import type {
  ISelectContentProps,
  ISelectItemProps,
  ISelectTriggerProps,
  ISelectProps
} from './type'
import { Icon } from '@/components/ui/icon'
import { twMerge } from 'tailwind-merge'

const SelectTrigger = (props: ISelectTriggerProps) => {
  const {
    readonly,
    className,
    placeholder,
    ...otherProps
  } = props

  const triggerClassName = twMerge(
    `px-2 py-1 min-w-32 flex items-center justify-between
    bg-bg-base-3 dark:bg-dark-bg-base-3 leading-none 
    text-on-bg-base-3 dark:text-dark-on-bg-base-3 
    disabled:text-on-bg-base-2 data-disabled:bg-bg-base-2
    `,
    readonly && 'pointer-events-none',
    className
  )

  console.log(triggerClassName)

  return (
    <RawSelect.Trigger
      className={triggerClassName}
      {...otherProps}
    >
      <RawSelect.Value placeholder={placeholder}/>
      <RawSelect.Icon className={twMerge(
        readonly && 'text-slate-300'
      )}>
        <Icon name='mdiChevronDown'></Icon>
      </RawSelect.Icon>
    </RawSelect.Trigger>
  )
}

const SelectContent = (props: ISelectContentProps) => {
  const {
    items
  } = props

  return (
    <RawSelect.Portal>
      <RawSelect.Content className='bg-bg-base-3 dark:bg-dark-bg-base-3'>
        <RawSelect.Viewport className='p-1'>
          {
            (items && Array.isArray(items))
              &&
            items.map(item => {
              return (
                <SelectItem
                  value={item.value}
                  key={item.value}
                  disabled={item.disabled}
                >
                  { item.label }
                </SelectItem>
              )
            })
          }
        </RawSelect.Viewport>
      </RawSelect.Content>
    </RawSelect.Portal>
  )
}

const SelectItem = (props: ISelectItemProps) => {
  const {
    value,
    children,
    ref,
    className,
    disabled,
    ...otherProps
  } = props

  const itemClassName = twMerge(
    `relative flex py-1 select-none items-center pl-5 cursor-pointer data-disabled:pointer-events-none data-highlighted:outline-none
      text-on-bg-base-3 dark:text-dark-on-bg-base-3
      data-highlighted:bg-bg-base-1 dark:data-highlighted:bg-dark-bg-base-1
      data-disabled:text-slate-500
    `,
    className
  )

  return (
    <RawSelect.Item
      disabled={disabled}
      className={itemClassName}
      ref={ref}
      value={value}
      {...otherProps}
    >
      <RawSelect.ItemText>
        { children }
      </RawSelect.ItemText>
      <RawSelect.ItemIndicator
        className='absolute left-0 inline-flex items-center justify-center w-8'>
      </RawSelect.ItemIndicator>
    </RawSelect.Item>
  )
}

const Select = (props: ISelectProps) => {
  const {
    items,
    disabled,
    placeholder,
    readonly
  } = props

  return (
    <RawSelect.Root disabled={disabled}>
      <SelectTrigger
        readonly={readonly}
        placeholder={placeholder}>
      </SelectTrigger>
      <SelectContent items={items}>
      </SelectContent>
    </RawSelect.Root>
  )
}

Select.Trigger = SelectTrigger
Select.Content = SelectContent

export {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent
}
