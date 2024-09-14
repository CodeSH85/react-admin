export type BaseModel = {
  id: string,
  key: string,
  title: string
}

export type User = {
  name: string,
  role: 'admin' | 'user' | 'dev'
}