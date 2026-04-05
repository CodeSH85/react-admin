import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { useDarkMode } from '@/hooks/useDarkMode'

export const Route = createFileRoute('/')({
  component: Home
})

function Home() {
  return (
    <main className="flex flex-col">
      <TopNav></TopNav>
      <div className="flex grow max-w-full bg-slate-500 overflow-hidden">
        <SideNav></SideNav>
        <div className="flex-auto p-1.5 overflow-hidden">
          <div className="bg-slate-100 dark:bg-gray-800 min-h-full overflow-auto p-2">
            {/* <div style={{ height: '1200px', width: '2120px', outline: '2px solid red' }}>123</div> */}
            <Button>
              Test Button 123
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

const TopNav = ({ className }: { className?: string }) => {

  const { toggleDarkMode } = useDarkMode()

  return (
    <div className={`min-h-8 flex items-center justify-between bg-slate-400 p-1.5 ${className}`}>
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
          `min-w-12 bg-slate-200 p-2 transition-all duration-150 ease-in ${className}`,
          expand ? 'w-48' : 'w-12'
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
      <div className="">
        Nav
      </div>
    </div>
  )
}
