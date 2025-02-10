import { useState, useMemo } from 'react'
import { AppContext } from './hooks/useAppContext'
import { useMemo2dArraywithId } from './hooks/useMemoizeData'
import { type Program } from './types/ProgramTypes'
import splitArray from './utils/splitArrays'

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<string | null>(null)
  const [search, setSearch] = useState<string | null>(null)
  const [sort, setSort] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [fullData, setFullData] = useState<Program[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('')

  const processedData = useMemo(() => {
    let result = [...fullData]

    if (search) {
      const searchTerm = search.toLowerCase().trim()
      result = result.filter((item) => {
        const programName = item['Program Name'].toLowerCase()
        const schoolName = item['School'].toLowerCase()

        return programName.includes(searchTerm) || schoolName.includes(searchTerm)
      })
    }

    if (filter) {
      result = result.filter((item) => item['Degree Type'] === filter)
    }

    if (sort) {
      switch (sort) {
        case 'costHighToLow':
          result.sort(
            (a, b) =>
              Number(b['Annual Tuition'].replace(/[^0-9.-]+/g, '')) -
              Number(a['Annual Tuition'].replace(/[^0-9.-]+/g, ''))
          )
          break
        case 'costLowToHigh':
          result.sort(
            (a, b) =>
              Number(a['Annual Tuition'].replace(/[^0-9.-]+/g, '')) -
              Number(b['Annual Tuition'].replace(/[^0-9.-]+/g, ''))
          )
          break
        case 'programName':
          result.sort((a, b) => a['Program Name'].localeCompare(b['Program Name']))
          break
        case 'schoolName':
          result.sort((a, b) => a.School.localeCompare(b.School))
          break
        case 'location':
          result.sort((a, b) => a.Location.localeCompare(b.Location))
          break
        case 'method':
          result.sort((a, b) => a.Delivery.localeCompare(b.Delivery))
          break
        default:
          break
      }
    }
    setPage(0)
    return splitArray(result, itemsPerPage)
  }, [fullData, search, filter, sort, itemsPerPage])

  const dataWithId = useMemo2dArraywithId(processedData)

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
      fullData,
      setFullData,
      loading,
      setLoading,
      error,
      setError,
    }),
    [filter, search, sort, page, itemsPerPage, dataWithId, fullData, loading, error]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
