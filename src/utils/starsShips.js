import { useSelector } from 'react-redux'
import imgGallery from '@/data/imageGallery.json'

//With this tool, we format the path name into a suitable format for the browser.
export const convertNameToPathName = (data) => {
  const pathName = data.name.toLowerCase().replaceAll(' ', '-')
  return pathName
}

//Our tool that retrieves the details of the ship based on the user's selection.
export const useShipDetails = (name) =>
  useSelector(
    (state) =>
      state.cards.data.results.filter(
        (data) => convertNameToPathName(data) === name
      )[0]
  )

//Our tool that retrieves the image of the ship selected by the user.
export const useShipImage = (name) => {
  const data = imgGallery.filter((img) => img.name === name)
  return data[0]
}
