import { Icon } from '@/components/ui/icon'

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
            p-md transition-all duration-150 ease-in
          `,
          expand ? 'w-48' : 'w-12'
        ]
          .join(' ')
      }
    >
      {
        modules.map(module => (
          <button
            key={module.key}
            className="
              flex items-center gap-1 w-full hover:bg-bg-base-2 dark:hover:bg-dark-bg-base-2 rounded cursor-pointer
              p-sm
            "
          >
            {
              module.icon &&
              <Icon
                name={module.icon}
                className="max-w-4.5"
              />
            }
            {
              expand && <span>{module.name}</span>
            }
          </button>
        ))
      }
    </div>
  )
}
