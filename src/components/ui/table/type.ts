
export type ColumnType = {
  key: string
  title: string | number
  dataType?: string
  [otherProp: string]: unknown
}

export type DataTableProps = {
  data: any[]
  columns: ColumnType[]
}
