import { Link, useParams } from 'react-router-dom'
import { useShipDetails } from '../utils/starsShips'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function StarsShipDetails() {
  const { name } = useParams()
  const data = useShipDetails(name)[0]
  return (
    <>
      <div className="relative w-full min-h-screen flex  items-center justify-center text-black ">
        <Link
          to="/"
          className="flex  items-center gap-x-2 uppercase font-bold bg-indigo-700 hover:bg-indigo-800 text-white absolute md:top-4 md:left-4 md:p-3 p-2 rounded-md top-4  left-3 sm:top-3 sm:left-4 max-[290px]:-left-1"
        >
          <AiOutlineArrowLeft size={24} />
          <span className="sm:flex hidden">Back</span>
        </Link>
        <div className="grid md:grid-cols-2 place-items-center place-content-center max-w-6xl  p-4 gap-5 rounded-lg bg-gray-800 border-gray-700 text-gray-400 ">
          <div>
            <h1 className="mb-4 text-white text-2xl font-bold md:text-left text-right">
              {data?.name}
            </h1>
            <img
              className="rounded-lg w-full"
              src="/starsship.webp"
              alt={data?.name}
            />
          </div>
          <div className="info">
            <p>
              <span>Model:</span>
              {data?.name}
            </p>
            <p>
              <span>Hyperdrive Rating:</span>
              {data?.hyperdrive_rating}
            </p>
            <p>
              <span>Passengers:</span>
              {data?.passengers}
            </p>
            <p>
              <span>Max Atmosphering Speed:</span>
              {data?.max_atmosphering_speed}
            </p>
            <p>
              <span>Manufacturer:</span>
              {data?.manufacturer}
            </p>
            <p>
              <span>Crew:</span>
              {data?.crew}
            </p>
            <p>
              <span>Cargo Capacity:</span>
              {data?.cargo_capacity}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default StarsShipDetails
