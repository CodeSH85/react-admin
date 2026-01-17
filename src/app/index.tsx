import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'

export const Route = createFileRoute('/')({
  component: Home
})

function Home() {
  return (
    <main>
      <div className="h-full flex">
        <SideNav></SideNav>
        <div className="h-full flex-auto flex flex-col bg-gray-300">
          <TopNav></TopNav>
          <div className="p-3 grow overflow-hidden ">
            <div className="bg-slate-100 w-full h-full p-2 rounded">
              <Button>
                Test Button 123
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const TopNav = () => {
  return (
    <div className='w-full min-h-8 bg-slate-400'>

    </div>
  )
}

const SideNav = () => {
  const [expand, setExpand] = useState(false)

  function toggleExpand() {
    setExpand(!expand)
  }

  return (
    <div
      className={
        [
          'min-h-full min-w-2 bg-slate-200 p-2 transition-all duration-150 ease-in',
          expand ? 'w-48' : 'w-12'
        ]
        .join(' ')
      }
    >
      <button
        onClick={toggleExpand}
      >
        {expand ? <Icon path="mdiAccount"></Icon> : <Icon path="mdiAirballoon"></Icon>}
      </button>
      <div className="">
        Nav
      </div>
    </div>
  )
}
