export type MenuItem = {
  key: string
  title: string | number
  icon?: string
}

export interface Menu {
  items: MenuItem[]
}