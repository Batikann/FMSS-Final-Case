import { createSlice } from '@reduxjs/toolkit'
import {
  fetchAllStartsShips,
  fetchLoadMoreData,
  fetchStarsShipsByQuery,
} from '../service/cardServices'

const theme =
  localStorage.getItem('theme') !== null
    ? localStorage.getItem('theme')
    : 'dark'

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    data: [],
    isLoading: false,
    isLoadNewData: false,
    nextPage: '',
    modalStatus: false,
    theme: theme,
  },
  reducers: {
    //A function that allows us to load our new page.
    getNextPage: (state, action) => {
      state.nextPage = action.payload
    },
    //A function that allows us to open and close our modal.
    showModal: (state, action) => {
      state.modalStatus = action.payload
    },

    //We use a function that allows us to change our theme, and we change it based on the selected option and save it to the locale.
    switchTheme: (state, action) => {
      state.theme = action.payload
      localStorage.setItem('theme', action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllStartsShips.pending, (state) => {
      state.isLoading = true
    })

    //If our request is successful, we put the received data into our 'data' array.
    builder.addCase(fetchAllStartsShips.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })

    //If we want to show a loader on the screen until our API request returns, we can use the 'pending' state for this purpose.
    builder.addCase(fetchLoadMoreData.pending, (state) => {
      state.isLoadNewData = true
    })
    //Here, if the request from our API is successful, we append the new data while preserving the previous data.
    builder.addCase(fetchLoadMoreData.fulfilled, (state, action) => {
      state.isLoadNewData = false
      state.data = {
        ...state.data,
        results: state.data.results.concat(action.payload.results),
        next: (state.data.next = action.payload.next),
      }
    })
    builder.addCase(fetchStarsShipsByQuery.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchStarsShipsByQuery.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
  },
})

//The custom hooks we write to access the data in the state more easily from everywhere.
export const useShipsResults = (state) => state.cards.data.results
export const useShips = (state) => state.cards.data
export const useLoading = (state) => state.cards.isLoading
export const useLoadMore = (state) => state.cards.isLoadNewData
export const useModalStatus = (state) => state.cards.modalStatus
export const useTheme = (state) => state.cards.theme

export const { getNextPage, showModal, switchTheme } = cardSlice.actions
export default cardSlice.reducer
