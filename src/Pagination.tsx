import { type PaginationProps } from './types/ProgramTypes'

const Pagination = ({ itemList, setPage }: PaginationProps) => {
  const buttonArray = itemList.length
    ? Array.from({ length: itemList.length - 1 }, (_, index) => ({ content: index + 1 }))
    : []

  return (
    <div>
      {buttonArray.map((item) => (
        <button key={item.content} onClick={() => setPage(item.content)}>
          {item.content}
        </button>
      ))}
    </div>
  )
}

export default Pagination
