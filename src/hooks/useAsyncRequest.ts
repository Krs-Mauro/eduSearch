import { useEffect } from 'react'
import { useAppContext } from './useAppContext'

const useAsyncRequest = (url: string) => {
  const { setFullData, setError, setLoading } = useAppContext()

  useEffect(() => {
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
        setFullData(data.record)
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

    callData()
  }, [setFullData, setError, setLoading, url])
}

export default useAsyncRequest
