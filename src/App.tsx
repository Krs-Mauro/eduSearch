import { useState } from 'react'
import useAsyncRequest from './hooks/useAsyncRequest'
import { type ProgramItem } from './types/ProgramTypes'
import { useMemo2dArraywithId } from './hooks/useMemoizeData'
import Pagination from './Pagination'

function App() {
  const [page, setPage] = useState(1)
  const { data, loading, error } = useAsyncRequest(
    'https://api.jsonbin.io/v3/b/67a4dda7e41b4d34e485322d'
  )

  const newData = useMemo2dArraywithId(data)

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {newData.length != null && newData[page] != null && !loading && !error && (
        <>
          <ul>
            {newData[page].map((item: ProgramItem) => (
              <li key={item.id}>{item['Program Name']}</li>
            ))}
          </ul>
          <Pagination itemList={newData} setPage={setPage} />
        </>
      )}
    </div>
  )
}

export default App
