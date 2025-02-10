import { useAppContext } from '../../hooks/useAppContext'

const FilterSelector = () => {
  const { fullData, setFilter } = useAppContext()

  const degreeTypes = Array.from(new Set(fullData.map((item) => item['Degree Type']))).sort()

  return (
    <div className="flex flex-wrap gap-4 items-center font-medium">
      <p>Filter By:</p>
      <div className="flex flex-wrap">
        {degreeTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className="px-3 h-4 leading-1 border-l-2 border-gray-400"
          >
            {type}
          </button>
        ))}
        <button
          onClick={() => setFilter(null)}
          className="px-3 h-4 leading-1 border-l-2 border-gray-400 "
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default FilterSelector
