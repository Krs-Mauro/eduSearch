import { useState, useMemo } from 'react'
import { AppContext } from './hooks/useAppContext'
import { useMemo2dArraywithId } from './hooks/useMemoizeData'
import { type Program } from './types/ProgramTypes'

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<string | null>(null)
  const [search, setSearch] = useState<string | null>(null)
  const [sort, setSort] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [data, setData] = useState<Program[][]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('')

  const dataWithId = useMemo2dArraywithId(data)

  const value = useMemo(
    () => ({
      filter,
      setFilter,
      search,
      setSearch,
      sort,
      setSort,
      page,
      setPage,
      itemsPerPage,
      setItemsPerPage,
      dataWithId,
      data,
      setData,
      loading,
      setLoading,
      error,
      setError,
    }),
    [filter, search, sort, page, itemsPerPage, dataWithId, data, loading, error]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
