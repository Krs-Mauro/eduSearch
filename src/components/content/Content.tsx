import SplashScreen from './SplashScreen'
import { useAppContext } from '../../hooks/useAppContext'
import useAsyncRequest from '../../hooks/useAsyncRequest'
import { type ProgramItem } from '../../types/ProgramTypes'
import Card from './Card'
import ProgramCounter from './ProgramCounter'

const Content = () => {
  const { dataWithId, loading, error, page } = useAppContext()

  useAsyncRequest('https://api.jsonbin.io/v3/b/67a4dda7e41b4d34e485322d')

  return (
    <div className="w-full h-[calc(100vh-165px)] px-60 overflow-y-scroll">
      <ProgramCounter />
      {loading && <SplashScreen />}
      {error && <p>Error: {error}</p>}
      {dataWithId.length != null && dataWithId[page] != null && !loading && !error && (
        <ul className="w-full">
          {dataWithId[page].map((item: ProgramItem) => (
            <Card key={item.id} card={item} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Content
