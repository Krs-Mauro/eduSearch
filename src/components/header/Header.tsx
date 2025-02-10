import SubHeader from './SubHeader'
import UpperHeader from './UpperHeader'

const Header = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <UpperHeader />
      <hr className="w-full border-0 border-b-4 border-amber-500 " />
      <SubHeader />
    </div>
  )
}

export default Header
