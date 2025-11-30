import { default as MdiIcon } from '@mdi/react'
import * as mdiIcons from '@mdi/js'

interface IconProps {
  path: string
  size?: number
  [key: string]: unknown
}

export const Icon = (props: IconProps) => {

  const {
    path,
    size = 1,
    ...otherProps
  } = props

  const iconPath = mdiIcons[path as keyof typeof mdiIcons]

  if (!iconPath) {
    console.warn(`Icon "${path}" not found`)
    return null
  }

  return (
    <MdiIcon
      path={iconPath}
      size={size}
      {...otherProps}
    />
  )
}
