import { useState, useEffect } from 'react'
import splitArray from '../utils/splitArrays'
import { type ProgramItem } from '../types/ProgramTypes'

const useAsyncRequest = (url: string) => {
  const [data, setData] = useState<ProgramItem[][]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('')

  const callData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'X-Access-Key': '$2a$10$fUmlePd70Q1i/6XsxKjUzOfBNi8kiyb.SWOHZqB0mMdofau4Z3Af.',
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const dividedData = splitArray(data.record as ProgramItem[], 15)
      setData(dividedData)
    } catch (error: unknown) {
      console.error('Error fetching data:', error)
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unknown error occurred')
      }
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    callData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { data, loading, error }
}

export default useAsyncRequest
