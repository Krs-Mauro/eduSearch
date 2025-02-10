import { useState } from 'react'
import SearchIcon from '../../assets/SearchIcon'
import { useAppContext } from '../../hooks/useAppContext'

const SearchBar = () => {
  const { setSearch } = useAppContext()
  const [inputValue, setInputValue] = useState('')

  const handleSearch = () => {
    setSearch(inputValue)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="flex justify-center items-center w-1/3">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-amber-500 w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-amber-500 p-3 rounded-r-md hover:bg-amber-600 transition-colors"
      >
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchBar
