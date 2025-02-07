import { useMemo } from 'react'
import generateUUID from './utils/generateUUID'
import useAsyncRequest from './hooks/useAsyncRequest'
import { Program, ProgramItem } from './types/ProgramTypes'

function App() {
  const { data, loading, error } = useAsyncRequest(
    'https://api.jsonbin.io/v3/b/67a4dda7e41b4d34e485322d'
  )

  const newData = useMemo(
    () =>
      data.map((item: Program) => ({
        id: generateUUID(),
        ...item,
      })),
    [data]
  )

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && !loading && !error && (
        <ul>
          {newData.map((item: ProgramItem) => (
            <li key={item.id}>{item['Program Name']}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
