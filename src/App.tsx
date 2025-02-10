import { type ProgramItem } from './types/ProgramTypes'
import Pagination from './components/Pagination'
import Header from './components/header/Header'
import { useAppContext } from './hooks/useAppContext'

function App() {
  const { dataWithId, loading, error, page } = useAppContext()

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
