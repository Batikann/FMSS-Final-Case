import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './card/cardSlice'

export const store = configureStore({
  reducer: {
    cards: cardSlice,
  },
})
