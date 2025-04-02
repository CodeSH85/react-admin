import type { MenuProps as HeadlessUIProp } from '@headlessui/react';

export type MenuPropType = {
  title?: string;
  items?: MenuItem[]
  closeOnSelect?: boolean
  closeOnBlur?: boolean
  [key: string]: any
}

export type MenuItem = {
  key: string
  title: string | number
  icon?: string
} & HeadlessUIProp
