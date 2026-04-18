import appCss from '@/styles/globals.css?url'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts
} from '@tanstack/react-router'
import { useDarkMode } from '@/hooks/useDarkMode'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      { title: 'Enterprise app' }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss
      }
    ]
  }),
  component: RootLayout
})

function RootLayout() {
  const { darkMode } = useDarkMode()

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <head>
        <HeadContent />
      </head>
      <body className='bg-bg-layer-1 dark:bg-dark-bg-layer-1'>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
