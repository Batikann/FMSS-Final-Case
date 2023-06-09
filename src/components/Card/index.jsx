import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { convertNameToPathName } from '@/utils/starsShips'
import { useShipsResults } from '@/redux/card/cardSlice'
import ImageGallery from '@/data/imageGallery.json'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src//effects/blur.css'
import 'react-lazy-load-image-component/src//effects/opacity.css'
import { useShipImage } from '@/utils/starsShips'

function Card() {
  const starsShips = useSelector(useShipsResults)
  return (
    <>
      {starsShips?.map((starsShip, i) => {
        const img = useShipImage(starsShip?.name)
        return (
          <div
            className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 cursor-pointer"
            key={i}
          >
            <Link to={`ship/${convertNameToPathName(starsShip)}`}>
              <LazyLoadImage
                className="rounded-t-lg h-48 w-full object-cover"
                src={img.imgPath}
                alt={starsShip?.name}
                effect="blur"
                width="100%"
                height={192}
                placeholderSrc={ImageGallery[i]?.imgPath}
              />
            </Link>
            <div className="p-5">
              <Link to={`ship/${convertNameToPathName(starsShip)}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {starsShip?.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-semibold text-gray-700 dark:text-gray-400">
                  Model:
                </span>
                {starsShip?.model}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-semibold text-gray-700 dark:text-gray-400">
                  Hyperdrive Rating:
                </span>
                {starsShip?.hyperdrive_rating}
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default Card
