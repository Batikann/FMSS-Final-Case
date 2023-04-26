import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { switchTheme } from '@/redux/card/cardSlice'
import { useTheme } from '@/redux/card/cardSlice'
import { useDispatch, useSelector } from 'react-redux'

function Theme() {
  const dispatch = useDispatch()
  const theme = useSelector(useTheme)

  //Here, there is a condition that changes our theme.
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  return (
    <div
      className="absolute right-10 cursor-pointer transition-all"
      onClick={() => {
        dispatch(switchTheme(theme === 'dark' ? 'light' : 'dark'))
      }}
    >
      {theme === 'dark' ? (
        <BsFillSunFill size={35} />
      ) : (
        <BsFillMoonFill size={35} />
      )}
    </div>
  )
}
export default Theme
