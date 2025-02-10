import { ChangeEvent } from 'react'
import { useAppContext } from '../../hooks/useAppContext'

const ItemsPerPageSelector = () => {
  const { itemsPerPage, setItemsPerPage } = useAppContext()
  const itemsOptions = [10, 20, 50, 100]

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value))
  }

  return (
    <div className="pr-8">
      <label htmlFor="sort-select" className="text-gray-700 pr-2">
        Items per page:
      </label>
      <select
        id="sort-select"
        value={itemsPerPage}
        onChange={handleSelect}
        className="border w-22 border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:border-amber-500  focus:ring-amber-500"
      >
        {itemsOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ItemsPerPageSelector
