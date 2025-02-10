import { type Dispatch, type SetStateAction } from 'react'

export interface Program {
  'Annual Tuition': string
  'Degree Type': string
  Delivery: string
  Location: string
  'Program Name': string
  School: string
}

export interface ProgramItem extends Program {
  id: string
}

export interface PaginationProps {
  itemList: ProgramItem[][]
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

export interface AppContextProps {
  filter: string | null
  setFilter: Dispatch<SetStateAction<string | null>>
  search: string | null
  setSearch: Dispatch<SetStateAction<string | null>>
  sort: string | null
  setSort: Dispatch<SetStateAction<string | null>>
  dataWithId: ProgramItem[][]
  page: number
  setPage: Dispatch<SetStateAction<number>>
  loading: boolean
  error: string | null
}
