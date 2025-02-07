import { useMemo } from 'react'
import generateUUID from '../utils/generateUUID'
import { type Program, type ProgramItem } from '../types/ProgramTypes'

export const useMemo2dArraywithId = (data: Program[][]): ProgramItem[][] => {
  const dataWithId = useMemo(
    () =>
      data.map((list) =>
        list.map((item: Program) => ({
          id: generateUUID(),
          ...item,
        }))
      ),
    [data]
  )

  return dataWithId
}
