import { useSelector } from 'react-redux'
import imgGallery from '../data/imageGallery.json'

export const convertNameToPathName = (data) => {
  const pathName = data.name.toLowerCase().replaceAll(' ', '-')
  return pathName
}

export const useShipDetails = (name) =>
  useSelector(
    (state) =>
      state.cards.data.results.filter(
        (data) => convertNameToPathName(data) === name
      )[0]
  )

export const useShipImage = (name) => {
  const data = imgGallery.filter((img) => img.name === name)
  return data[0]
}
