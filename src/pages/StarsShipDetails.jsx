import { Link, useParams } from 'react-router-dom'
import { useShipDetails, useShipImage } from '../utils/starsShips'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function StarsShipDetails() {
  const { name } = useParams()
  const data = useShipDetails(name)
  const img = useShipImage(data?.name)
  return (
    <div className="flex  flex-col items-start gap-8">
      <Link
        to="/"
        className="flex  items-center gap-x-2 uppercase font-bold bg-indigo-700 hover:bg-indigo-800 text-white justify-start py-3 px-6 rounded-lg"
      >
        <AiOutlineArrowLeft size={24} />
        <span className="sm:flex hidden">Back</span>
      </Link>
      <div className="relative w-full min-h-screen flex  items-center justify-center text-black ">
        <div className="grid md:grid-cols-2 place-items-center place-content-center max-w-6xl bg-white border-gray-200  p-4 gap-5 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-gray-400 ">
          <div>
            <h1 className="mb-4 text-gray-900 dark:text-white text-2xl font-bold md:text-left text-right">
              {data?.name}
            </h1>
            <img
              className="rounded-lg w-full h-96 object-cover"
              src={img?.imgPath}
              alt={data?.name}
            />
          </div>
          <div className="info">
            <p className="text-gray-700 dark:text-gray-400">
              <span>Model:</span>
              {data?.name}
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              <span>Hyperdrive Rating:</span>
              {data?.hyperdrive_rating}
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              <span>Passengers:</span>
              {data?.passengers}
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              <span>Max Atmosphering Speed:</span>
              {data?.max_atmosphering_speed}
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              <span>Manufacturer:</span>
              {data?.manufacturer}
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              <span>Crew:</span>
              {data?.crew}
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              <span>Cargo Capacity:</span>
              {data?.cargo_capacity}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StarsShipDetails
