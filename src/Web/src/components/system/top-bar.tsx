import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { useDarkMode } from '@/hooks/useDarkMode'

interface ITopBarProps {
  className?: string
  items: {
    key: string
    icon?: string
    type: 'button' | 'link',
    events?: Record<string, unknown>
    [key: string]: unknown
  }[]
}

export const TopBar = (props: ITopBarProps) => {

  const {
    className,
    items
  } = props

  const { toggleDarkMode } = useDarkMode()

  const containerClassName = `
    min-h-8 flex items-center justify-between p-md 
    bg-bg-base-1 dark:bg-dark-bg-base-1 text-on-bg-base-1 dark:text-dark-on-bg-base-1
    ${className}
  `

  return (
    <div className={containerClassName}>
      <div className="flex items-center gap-md">
        {
          items?.map(item => (
            <button
              key={item.key}
              { ...(item?.events && { ...item.events }) }
            >
              { item.icon && <Icon name={item.icon} /> }
            </button>
          ))
        }
        {/* <img alt="logo here" /> */}
      </div>
      <div className="">
        <Button
          size='sm'
          onClick={toggleDarkMode}
        >
          Toggle Mode
        </Button>
      </div>
    </div>
  )
}
