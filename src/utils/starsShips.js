import { useSelector } from 'react-redux'

export const convertNameToPathName = (data) => {
  const pathName = data.name.toLowerCase().replaceAll(' ', '-')
  return pathName
}

export const useShipDetails = (name) =>
  useSelector((state) =>
    state.cards.data.results.filter(
      (data) => convertNameToPathName(data) === name
    )
  )
