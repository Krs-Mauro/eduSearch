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
