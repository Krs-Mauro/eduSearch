import ItemsPerPageSelector from './ItemsPerPageSelector'
import PageButtons from './PageButtons'

const Pagination = () => {
  return (
    <div className="flex w-full justify-end items-center px-60 mb-4">
      <ItemsPerPageSelector />
      <PageButtons />
    </div>
  )
}

export default Pagination
