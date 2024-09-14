import type { ButtonProps as HeadlessUIProp } from "@headlessui/react"
import type { Variant, Size } from "../type"

export type ButtonVariant = 'text' | & Variant 

export type InternalButtonProps = {
  color?: string,
  prependIcon?: string,
  appendIcon?: string,
  variant?: ButtonVariant
  size?: Size
  className?: string,
  children?: React.ReactNode
  [othersOptions: string] : unknown
}

export type ButtonProps = InternalButtonProps & HeadlessUIProp

