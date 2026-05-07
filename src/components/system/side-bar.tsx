import { Icon } from '@/components/ui/icon'
import { Button } from '@/components/ui/button'

interface ISideBarProps {
  className?: string
  expand?: boolean
  modules: {
    name: string
    key: string
    icon?: string | null
  }[]
}

export const SideBar = (props: ISideBarProps) => {
  const { className, modules, expand } = props

  return (
    <div
      className={
        [
          `bg-bg-base-1 dark:bg-dark-bg-base-1 text-on-bg-base-1 dark:text-dark-on-bg-base-1 ${className}
            p-md transition-all duration-150 ease-in max-w-48
          `
        ]
          .join(' ')
      }
    >
      {
        modules.map(module => {
          return (
            expand
              ?
              <Button
                variant='flat'
                color='info'
                size='md'
                key={module.key}
                className='w-full'
                prependIcon={module.icon || ''}
              >
                {module.name}
              </Button>
              :
              <Button
                variant='flat'
                color='info'
                size='md'
                icon
                key={module.key}
                className='w-full'
              >
                {
                  module.icon && <Icon name={module.icon} className='min-w-3'/>
                }
              </Button>
          )
        })
      }
    </div>
  )
}
