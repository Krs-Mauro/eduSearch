import { useState, useEffect } from 'react'
import { useAppContext } from '../../hooks/useAppContext'

const PageButtons = () => {
  const { page, setPage, dataWithId } = useAppContext()
  const [isPrevActive, setIsPrevActive] = useState(true)
  const [isNextActive, setIsNextActive] = useState(true)

  const buttonArray = dataWithId.length
    ? dataWithId.length <= 5
      ? Array.from({ length: dataWithId.length - 1 }, (_, index) => ({ content: index + 1 }))
      : [
          { content: 1 },
          { content: 2 },
          { content: 3 },
          { content: '...' },
          { content: dataWithId.length - 1 },
        ]
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
      <button
        className="bg-gray-100 border-2 border-gray-400 px-2 h-6 mr-2 disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={!isPrevActive}
        onClick={handlePrevious}
      >
        PREVIOUS
      </button>

      {buttonArray.map((item) =>
        item.content === '...' ? (
          <p key="ellipsis" className="inline-block w-7 h-6 mr-2 text-center">
            ...
          </p>
        ) : (
          <button
            className="bg-gray-100 border-2 border-gray-400 w-7 h-6 mr-2"
            key={item.content}
            onClick={() => {
              if (typeof item.content === 'number') setPage(item.content)
            }}
          >
            {item.content}
          </button>
        )
      )}

      <button
        className="bg-gray-100 border-2 border-gray-400 px-2 h-6 mr-2 disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={!isNextActive}
        onClick={handleNext}
      >
        NEXT
      </button>
    </div>
  )
}

export default PageButtons
