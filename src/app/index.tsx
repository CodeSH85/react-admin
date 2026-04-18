import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { useDarkMode } from '@/hooks/useDarkMode'
import { TestComponent } from '@/components/test'

export const Route = createFileRoute('/')({
  component: Home
})

const TopNav = ({ className }: { className?: string }) => {

  const { toggleDarkMode } = useDarkMode()

  return (
    <div className={`min-h-8 flex items-center justify-between bg-bg-base-1 dark:bg-dark-bg-base-1 text-on-bg-base-1 dark:text-dark-on-bg-base-1 p-sm ${className}`}>
      <div className="">
        Logo
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

const SideNav = ({ className }: { className?: string }) => {
  const [expand, setExpand] = useState(false)

  function toggleExpand() {
    setExpand(!expand)
  }

  return (
    <div
      className={
        [
          `min-w-10 bg-bg-base-1 dark:bg-dark-bg-base-1 text-on-bg-base-1 dark:text-dark-on-bg-base-1 p-md transition-all duration-150 ease-in ${className}`,
          expand ? 'w-48' : 'w-10'
        ]
          .join(' ')
      }
    >
      <button
        onClick={toggleExpand}
      >
        {
          expand
            ? <Icon name="mdiAccount"></Icon>
            : <Icon name="mdiAirballoon"></Icon>
        }
      </button>
    </div>
  )
}

function Home() {
  return (
    <main className="flex flex-col">
      <TopNav></TopNav>
      <div className="flex flex-1 overflow-hidden">
        <SideNav></SideNav>
        <div className="flex-1 p-md overflow-hidden">
          <div className="min-h-full bg-bg-base-2 dark:bg-dark-bg-base-2 text-on-bg-base-2 dark:text-dark-on-bg-base-2 p-md">
            <TestComponent></TestComponent>
          </div>
        </div>
      </div>
    </main>
  )
}
