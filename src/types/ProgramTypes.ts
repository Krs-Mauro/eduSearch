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
  page: number
  setPage: Dispatch<SetStateAction<number>>
  itemsPerPage: number
  setItemsPerPage: Dispatch<SetStateAction<number>>
  dataWithId: ProgramItem[][]
  data: Program[][]
  setData: Dispatch<SetStateAction<Program[][]>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  error: string | null
  setError: Dispatch<SetStateAction<string | null>>
}
