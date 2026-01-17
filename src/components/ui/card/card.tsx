import { ReactElement } from 'react'

const Card = (props: { children: ReactElement }) => {
  const {
    children
  } = props

  return (
    <div
      className="p-2 rounded-sm bg-slate-200"
    >
      {children}
    </div>
  )
}

export { Card }
