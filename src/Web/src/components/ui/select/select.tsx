import { useState } from 'react'
import { Select as RawSelect } from '@base-ui/react/select'
import type {
  ISelectTriggerProps,
  ISelectContentProps,
  ISelectProps
} from './type'
import { cn } from '@/utils'
import { MdClose, MdCheck, MdArrowDropDown } from 'react-icons/md'

const SelectTrigger = (props: ISelectTriggerProps) => {
  const {
    className,
    placeholder,
    onClearValue,
    clearable,
    hasValue,
    ...otherProps
  } = props

  function handleClearValue(event: React.MouseEvent | React.PointerEvent) {
    event.stopPropagation()
    if (event.type === 'click') {
      onClearValue?.(event as React.MouseEvent)
    }
  }

  const triggerClassName = cn(
    `
    min-w-32 w-fit px-2 py-1 flex items-center justify-between leading-none whitespace-nowrap gap-1.5 
    outline-none select-none
    focus-visible:bg-base-3 focus-visible:bg-base-3 
    bg-bg-base-3 dark:bg-dark-bg-base-3 
    text-on-bg-base-3 dark:text-dark-on-bg-base-3 
    disabled:text-on-bg-base-2 data-disabled:bg-bg-base-2
    `,
    className
  )

  return (
    <RawSelect.Trigger
      data-slot='select-trigger'
      className={triggerClassName}
      {...otherProps}
    >
      <RawSelect.Value placeholder={placeholder}/>
      <div className="flex items-center gap-1">
        <RawSelect.Icon>
          <MdArrowDropDown></MdArrowDropDown>
        </RawSelect.Icon>
        {
          clearable && hasValue &&
            <span
              aria-hidden
              onClick={handleClearValue}
              onPointerDown={handleClearValue}
              onMouseDown={handleClearValue}
            >
              <MdClose></MdClose>
            </span>
        }
      </div>
    </RawSelect.Trigger>
  )
}

const SelectContent = (props: ISelectContentProps) => {
  const {
    items,
    className,
    alignOffset = 0,
    alignItemWithTrigger = true
  } = props

  return (
    <RawSelect.Portal>
      <RawSelect.Positioner
        className='select-none outline-hidden'
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
      >
        <RawSelect.Popup
          className={cn(
            `
              min-w-(--anchor-width) origin-(--transform-origin) w-fit data-[side=none]:min-w-(--anchor-width)
              max-h-(--available-height)
              group bg-bg-base-3 dark:bg-dark-bg-base-3 ease-out py-1
            `,
            className
          )}
          data-align-trigger={alignItemWithTrigger}
        >
          {
            (items && Array.isArray(items))
              &&
            items.map(item => {
              return (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  { item.label }
                </SelectItem>
              )
            })
          }
        </RawSelect.Popup>
      </RawSelect.Positioner>
    </RawSelect.Portal>
  )
}

const SelectItem = (props: RawSelect.Item.Props) => {
  const {
    children,
    className,
    ...otherProps
  } = props

  const itemClassName = cn(
    `
      w-full px-2 py-1 flex justify-between items-center gap-1.5
      select-none cursor-pointer data-disabled:pointer-events-none data-highlighted:outline-none 
      text-on-bg-base-3 dark:text-dark-on-bg-base-3 
      data-highlighted:bg-bg-base-1 dark:data-highlighted:bg-dark-bg-base-1 
      data-disabled:text-slate-500
    `,
    className
  )

  return (
    <RawSelect.Item
      data-slot='select-item'
      className={itemClassName}
      {...otherProps}
    >
      <RawSelect.ItemText>
        { children }
      </RawSelect.ItemText>
      <RawSelect.ItemIndicator
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
            <MdCheck className='text-on-bg-base-3 dark:text-dark-on-bg-base-3'></MdCheck>
          </span>
        }
      >
      </RawSelect.ItemIndicator>
    </RawSelect.Item>
  )
}

const Select = <Value, Multiple extends boolean | undefined = false >(props: ISelectProps<Value, Multiple>) => {
  const {
    items,
    placeholder,
    label,
    clearable,
    value: propValue,
    onValueChange,
    multiple,
    defaultValue,
    ...otherProps
  } = props

  const isControlled = propValue !== undefined

  const [localValue, setLocalValue] = useState<any>(
    defaultValue ?? (multiple ? [] : null)
  )

  const value = isControlled ? propValue : localValue

  const handleValueChange = (newValue: any, eventDetails: any) => {
    if (!isControlled) {
      setLocalValue(newValue)
    }
    onValueChange?.(newValue, eventDetails)
  }

  function clearValue(event: React.MouseEvent) {
    const emptyValue = multiple ? [] : null
    if (!isControlled) {
      setLocalValue(emptyValue)
    }
    onValueChange?.(emptyValue as any, { reason: 'none', event: event.nativeEvent } as any)
  }

  const hasValue = multiple
    ? Array.isArray(value) && value.length > 0
    : value !== null && value !== undefined && value !== ''

  return (
    <RawSelect.Root
      items={items}
      value={value}
      onValueChange={handleValueChange}
      multiple={multiple}
      {...otherProps}>
      {label && (
        <RawSelect.Label>
          { label }
        </RawSelect.Label>
      )}
      <SelectTrigger
        clearable={clearable}
        onClearValue={clearValue}
        hasValue={hasValue}
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
