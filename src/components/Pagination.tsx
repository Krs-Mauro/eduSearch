import { useState, useEffect } from 'react'
import { useAppContext } from '../hooks/useAppContext'

const Pagination = () => {
  const { page, setPage, dataWithId } = useAppContext()
  const [isPrevActive, setIsPrevActive] = useState(true)
  const [isNextActive, setIsNextActive] = useState(true)

  const buttonArray = dataWithId.length
    ? Array.from({ length: dataWithId.length - 1 }, (_, index) => ({ content: index + 1 }))
    : []

  const handlePrevious = () => {
    if (page === 1) {
      setIsPrevActive(false)
      return
    }
    setPage((prevPage) => prevPage - 1)
  }
  const handleNext = () => {
    if (page === dataWithId.length - 1) {
      setIsNextActive(false)
      return
    }
    setPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    if (page === dataWithId.length - 1) {
      setIsNextActive(false)
    } else {
      setIsNextActive(true)
    }
    if (page === 1) {
      setIsPrevActive(false)
    } else {
      setIsPrevActive(true)
    }
  }, [page, dataWithId])

  return (
    <div>
      <button className="bg-amber-500" disabled={!isPrevActive} onClick={handlePrevious}>
        PREVIOUS
      </button>

      {buttonArray.map((item) => (
        <button key={item.content} onClick={() => setPage(item.content)}>
          {item.content}
        </button>
      ))}

      <button disabled={!isNextActive} onClick={handleNext}>
        NEXT
      </button>
    </div>
  )
}

export default Pagination
