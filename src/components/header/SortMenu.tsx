import { type ChangeEvent } from 'react'
import { useAppContext } from '../../hooks/useAppContext'

const SortMenu = () => {
  const { setSort } = useAppContext()

  const sortOptions = [
    { value: 'relevancy', label: 'Relevancy' },
    { value: 'costHighToLow', label: 'Cost: High to Low' },
    { value: 'costLowToHigh', label: 'Cost: Low to High' },
    { value: 'location', label: 'Location' },
    { value: 'programName', label: 'Program Name' },
    { value: 'schoolName', label: 'School Name' },
    { value: 'method', label: 'Method' },
  ]

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort-select" className="text-gray-700">
        Sort By:
      </label>
      <select
        id="sort-select"
        defaultValue="relevancy"
        onChange={handleSortChange}
        className="border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:border-amber-500 focus:ring-amber-500"
      >
        <option value="" disabled>
          Select option
        </option>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SortMenu
