import { Switch as RawSwitch } from '@base-ui/react/switch'
import { cva } from 'class-variance-authority'
import { SwitchPropType } from './type'
import { cn } from '@/utils'

const switchVariants = cva(
  `
    group relative flex min-h-6 min-w-12 cursor-pointer rounded-full 
    p-1 transition-colors duration-200 ease-in-out
    focus:outline-hidden data-focus:outline-1 data-focus:outline-white data-checked:bg-primary
  `,
  {
    variants: {
      checked: {
        true: 'bg-primary',
        false: 'bg-slate-400'
      },
      disabled: {
        true: 'bg-slate-400/40'
      }
    },
    defaultVariants: {
      checked: false
    }
  }
)

const Switch = (props: SwitchPropType) => {
  const {
    checked,
    disabled,
    children,
    label,
    className: propClassName,
    ...otherProps
  } = props
  const switchClass = cn(
    switchVariants({ checked, disabled }),
    propClassName
  )
  return (
    <label
      className='text-black dark:text-white'
    >
      { label }
      <RawSwitch.Root
        checked={checked}
        disabled={disabled}
        className={switchClass}
        {...otherProps}
      >
        {
          children ??
          <RawSwitch.Thumb
            className={
              cn(
                `bg-white pointer-events-none inline-block size-4 translate-x-0 rounded-full shadow-lg
                ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-6 
                dark:shadow-none dark:ring-0 dark:group-data-checked:translate-x-6`,
                disabled && 'bg-gray-200'
              )
            }
          />
        }
      </RawSwitch.Root>
    </label>
  )
}

export { Switch }
