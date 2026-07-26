import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { TestComponent } from '@/components/test'
import { SideBar } from '@/components/system/side-bar'
import { TopBar } from '@/components/system/top-bar'
import { Container } from '@/components/ui/container'
import { MdDashboard, MdMenu, MdMenuOpen } from 'react-icons/md'

export const Route = createFileRoute('/')({
  component: Home
})

function Home() {
  const modules = [
    {
      name: 'Dashboard',
      key: 'dashboard',
      icon: <MdDashboard></MdDashboard>
    },
    {
      name: 'Browse',
      key: 'browse',
      icon: <MdDashboard></MdDashboard>
    }
  ]

  const [isExpanded, setIsExpanded] = useState(false)

  const topBarItems = [
    {
      key: 'home',
      image: '',
      type: 'button' as const
    },
    {
      key: 'sidebarToggle',
      icon: isExpanded ? <MdMenuOpen></MdMenuOpen> : <MdMenu></MdMenu>,
      type: 'button' as const,
      events: {
        onClick: () => {
          setIsExpanded(!isExpanded)
        }
      }
    }
  ]

  return (
    <main className="flex flex-col root">
      <TopBar items={topBarItems}></TopBar>
      <div className="flex flex-1 overflow-hidden">
        <SideBar
          expand={isExpanded}
          modules={modules}
        ></SideBar>
        <div className="flex-1 p-md overflow-hidden">
          <Container>
            <TestComponent></TestComponent>
          </Container>
        </div>
      </div>
    </main>
  )
}
