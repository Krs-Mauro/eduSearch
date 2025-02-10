import SearchIcon from '../../assets/SearchIcon'

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center w-1/3">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-amber-500 w-full"
      />
      <button className="bg-amber-500 p-3 rounded-r-md">
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchBar
