import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchStarsShipsByQuery } from '@/redux/service/cardServices'
import { showModal } from '@/redux/card/cardSlice'
import { fetchAllStartsShips } from '@/redux/service/cardServices'

function Header() {
  const dispatch = useDispatch()
  const [val, setVal] = useState('')

  const getDataBySearchValue = async (e) => {
    e.preventDefault()
    if (val) {
      dispatch(fetchStarsShipsByQuery(val))
      setVal('')
    } else {
      dispatch(showModal(true))
    }
  }

  return (
    <div className="w-full mb-10 flex flex-col justify-center items-center">
      <img
        src="https://www.freeiconspng.com/uploads/star-wars-logo-png-image-0.png"
        alt="logo"
        className="w-52 h-44 object-center cursor-pointer"
        onClick={() => dispatch(fetchAllStartsShips())}
      />
      <form className="md:w-[50%] md:hover:scale-110 w-full">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-6 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
            placeholder="Enter ship name or model"
            required
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button
            type="submit"
            onClick={getDataBySearchValue}
            className={`text-white absolute right-2.5 bottom-[17px]  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 outline-none ${
              val
                ? 'bg-indigo-600 hover:bg-indigo-700 '
                : 'dark:bg-indigo-300 pointer-events-none bg-indigo-400'
            }`}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
export default Header
