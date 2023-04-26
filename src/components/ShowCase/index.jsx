import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAllStartsShips,
  fetchLoadMoreData,
} from '@/redux/service/cardServices'
import { useEffect } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Card from '../Card'
import Loading from '../Loading'
import Skeleton from '../Skeleton'
import { useLoadMore, useLoading, useShips } from '@/redux/card/cardSlice'
import { useShipsResults } from '@/redux/card/cardSlice'

function ShowCase() {
  const starsShips = useSelector(useShips)
  const loading = useSelector(useLoading)
  const loadMore = useSelector(useLoadMore)
  const dispatch = useDispatch()
  const data = useSelector(useShipsResults)

  //If there is no data in the Redux store when the page is first loaded, our service works; otherwise, it does not work.
  useEffect(() => {
    if (data == null) {
      dispatch(fetchAllStartsShips())
    }
  }, [])

  //Our function that runs when we want to load more data.
  const nextPageHandler = () => {
    if (starsShips.next != null) {
      dispatch(fetchLoadMoreData(starsShips?.next))
    }
  }
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-content-center gap-4 mb-4 lg:gap-6">
        {!loading ? <Card /> : <Skeleton />}
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
        <Loading />
      )}
    </>
  )
}
export default ShowCase
