import { type ProgramItem } from './types/ProgramTypes'
import Pagination from './components/footer/Pagination'
import Header from './components/header/Header'
import { useAppContext } from './hooks/useAppContext'
import useAsyncRequest from './hooks/useAsyncRequest'

function App() {
  const { dataWithId, loading, error, page } = useAppContext()

  useAsyncRequest('https://api.jsonbin.io/v3/b/67a4dda7e41b4d34e485322d')

  return (
    <>
      <Header />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {dataWithId.length != null && dataWithId[page] != null && !loading && !error && (
        <>
          <ul>
            {dataWithId[page].map((item: ProgramItem) => (
              <li key={item.id}>{item['Program Name']}</li>
            ))}
          </ul>
          <Pagination />
        </>
      )}
    </>
  )
}

export default App
