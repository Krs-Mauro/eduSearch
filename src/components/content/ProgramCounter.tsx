import { useAppContext } from '../../hooks/useAppContext'

const ProgramCounter = () => {
  const { dataWithId, loading, search } = useAppContext()

  const totalPrograms = dataWithId.reduce((acc, currentArray) => acc + currentArray.length, 0)
  const complementaryString = search ? `for "${search}"` : ''

  return (
    <div className="pt-4">
      {!loading && (
        <p className="text-3xl">{`${totalPrograms} Online programs ${complementaryString}`}</p>
      )}
    </div>
  )
}

export default ProgramCounter
