import { Select as RawSelect } from '@base-ui/react/select'
import type {
  ISelectTriggerProps,
  ISelectContentProps,
  ISelectProps
} from './type'
import { Icon } from '@/components/ui/icon'
import { cn } from '@/utils'

const SelectTrigger = (props: ISelectTriggerProps) => {
  const {
    className,
    placeholder,
    clearable,
    ...otherProps
  } = props

  const triggerClassName = cn(
    `
    min-w-36 px-2 py-1 flex items-center justify-between leading-none whitespace-nowrap gap-1.5 
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
          <Icon name='mdiChevronDown'></Icon>
        </RawSelect.Icon>
        {
          clearable &&
            <RawSelect.Icon>
              <Icon name='mdiClose'></Icon>
            </RawSelect.Icon>
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
        className='outline-hidden'
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
      >
        <RawSelect.Popup
          className={cn('min-w-32 group bg-bg-base-3 dark:bg-dark-bg-base-3 ease-out py-1', className)}
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
            <Icon name='mdiCheck' className='text-on-bg-base-3 dark:text-dark-on-bg-base-3'></Icon>
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
    ...otherProps
  } = props

  return (
    <RawSelect.Root
      items={items}
      {...otherProps}>
      {label && (
        <RawSelect.Label>
          { label }
        </RawSelect.Label>
      )}
      <SelectTrigger
        clearable={clearable}
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
