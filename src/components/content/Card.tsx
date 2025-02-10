import type { ProgramItem } from '../../types/ProgramTypes'

const Card = ({ card }: { card: ProgramItem }) => {
  return (
    <li className="flex w-full flex-col justify-between items-center h-30">
      <div className="flex justify-between items-center w-full h-full text-gray-700">
        <div className="flex flex-col max-w-3xl">
          <p className="font-bold text-xl">{card['Program Name']}</p>
          <p className="font-semibold">{card.School}</p>
        </div>
        <div className="flex gap-12">
          <div className="">
            <p className="font-medium text-sm">Degree Type</p>
            <p className=" text-sm">{card['Degree Type']}</p>
          </div>
          <div className="">
            <p className="font-medium text-sm">Delivery</p>
            <p className=" text-sm">{card.Delivery}</p>
          </div>
          <div className="">
            <p className="font-medium text-sm">Annual Tuition</p>
            <p className=" text-sm">{card['Annual Tuition']}</p>
          </div>
        </div>
      </div>

      <hr className="w-full border-0 border-b-2 border-gray-300 " />
    </li>
  )
}

export default Card
