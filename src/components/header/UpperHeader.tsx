import MenuIcon from '../../assets/MenuIcon'
import CaretDown from '../../assets/CaretDown'
import SearchBar from './SearchBar'

const UpperHeader = () => {
  return (
    <div className="flex w-full justify-between items-center px-60">
      <div className="flex items-center">
        <MenuIcon />
        <h1 className="text-2xl font-bold text-amber-500 ml-3">Affordable Online Degrees</h1>
      </div>

      <SearchBar />
      <div className="flex justify-between items-center p-4 font-bold">
        <p className="border-r-2 pr-2">Sing In</p>
        <p className="px-2">More</p>
        <CaretDown height={8} />
      </div>
    </div>
  )
}

export default UpperHeader
