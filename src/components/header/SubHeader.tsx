import SortMenu from './SortMenu'
import FilterSelector from './FilterSelector'

const SubHeader = () => {
  return (
    <div className="flex w-full justify-between items-center px-60 py-1 bg-gray-100">
      <FilterSelector />
      <SortMenu />
    </div>
  )
}

export default SubHeader
