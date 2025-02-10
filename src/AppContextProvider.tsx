import { useState, useMemo } from 'react'
import { AppContext } from './hooks/useAppContext'
import useAsyncRequest from './hooks/useAsyncRequest'
import { useMemo2dArraywithId } from './hooks/useMemoizeData'

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<string | null>(null)
  const [search, setSearch] = useState<string | null>(null)
  const [sort, setSort] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const { data, loading, error } = useAsyncRequest(
    'https://api.jsonbin.io/v3/b/67a4dda7e41b4d34e485322d'
  )

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
      dataWithId,
      loading,
      error,
    }),
    [filter, search, sort, page, dataWithId, loading, error]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
