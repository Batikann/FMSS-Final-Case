import { useState } from 'react'
import { WiStars } from 'react-icons/wi'
import { useDispatch } from 'react-redux'
import { fetchStarsShipsByQuery } from '../../redux/service/cardServices'

function Header() {
  const dispatch = useDispatch()
  const [val, setVal] = useState('')

  const getDataBySearchValue = async (e) => {
    e.preventDefault()
    if (val) {
      dispatch(fetchStarsShipsByQuery(val))
      setVal('')
    } else {
      alert('Arama çubuğu boş geçilemez!!!')
    }
  }

  return (
    <>
      <img
        src="https://www.freeiconspng.com/uploads/star-wars-logo-png-image-0.png"
        alt="logo"
        className="w-52 h-44 object-center"
      />
      <form className="flex items-center gap-4">
        <input
          type="text"
          className="w-[400px] h-10 outline-none rounded-lg p-2 text-indigo-800"
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
        <button
          onClick={getDataBySearchValue}
          className="bg-indigo-600 text-white flex items-center p-2 text-lg rounded-lg hover:scale-110"
        >
          Filter
        </button>
      </form>
    </>
  )
}
export default Header
