import { default as MdiIcon } from '@mdi/react'
import * as mdiIcons from '@mdi/js'

interface IconProps {
  name: string
  size?: number
  [key: string]: unknown
}

// .default because in Vite 8 Rolldown version, default interop is no longer automatic,
// and we need to explicitly access the default export of the CommonJS module.
const IconComponent = (MdiIcon as any).default

export function Icon(props: IconProps) {

  const {
    name,
    size = 1,
    ...otherProps
  } = props

  const iconPath = mdiIcons[name as keyof typeof mdiIcons] as string | undefined

  if (!iconPath) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return (
    <IconComponent
      path={iconPath}
      size={size}
      {...otherProps}
    />
  )
}
