import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAllStartsShips,
  fetchLoadMoreData,
} from '../../redux/service/cardServices'
import { useEffect } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

function ShowCase() {
  const starsShips = useSelector((state) => state.cards.data)
  const loading = useSelector((state) => state.cards.isLoading)
  const loadMore = useSelector((state) => state.cards.isLoadNewData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllStartsShips())
  }, [])

  const nextPageHandler = () => {
    if (starsShips.next != null) {
      dispatch(fetchLoadMoreData(starsShips?.next))
    }
  }
  return (
    <div>
      <div>
        {!loading ? (
          starsShips?.results?.map((starShip, i) => {
            return <h3 key={i}>{starShip.name}</h3>
          })
        ) : (
          <div>
            <h1>Loading</h1>
          </div>
        )}
      </div>

      {!loadMore ? (
        <button
          onClick={() => nextPageHandler()}
          className={
            starsShips.next !== null
              ? ' text-white text-lg  p-2 outline-none border-none m-4 animate-bounce bg-indigo-800 rounded-full cursor-pointer'
              : 'hidden'
          }
        >
          <AiOutlineArrowDown size={25} />
        </button>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  )
}
export default ShowCase
