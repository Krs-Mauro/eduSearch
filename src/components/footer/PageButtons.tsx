import { useState, useEffect } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import { ProgramItem } from '../../types/ProgramTypes'

const PageButtons = () => {
  const { page, setPage, dataWithId } = useAppContext()
  const [isPrevActive, setIsPrevActive] = useState(true)
  const [isNextActive, setIsNextActive] = useState(true)

  const shortList = [
    { content: 1 },
    { content: 2 },
    { content: 3 },
    { content: '...' },
    { content: dataWithId.length },
  ]

  const getButtonArray = (list: ProgramItem[][]) => {
    if (!list.length) return []
    if (list.length > 5) return shortList

    return Array.from({ length: dataWithId.length }, (_, index) => ({ content: index + 1 }))
  }

  const buttonArray = getButtonArray(dataWithId)

  const handlePrevious = () => {
    if (page === 0) {
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
    if (page === 0) {
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

      {buttonArray.map((item, index) =>
        item.content === '...' ? (
          <p key="ellipsis" className="inline-block w-7 h-6 mr-2 text-center">
            ...
          </p>
        ) : (
          <button
            className="bg-gray-100 border-2 border-gray-400 w-7 h-6 mr-2"
            key={item.content}
            onClick={() => {
              if (typeof item.content === 'number') setPage(index)
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
