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
    getNextPage: (state, action) => {
      state.nextPage = action.payload
    },
    showModal: (state, action) => {
      state.modalStatus = action.payload
    },
    switchTheme: (state, action) => {
      state.theme = action.payload
      localStorage.setItem('theme', action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllStartsShips.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchAllStartsShips.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchLoadMoreData.pending, (state) => {
      state.isLoadNewData = true
    })
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

export const useShipsResults = (state) => state.cards.data.results
export const useShips = (state) => state.cards.data
export const useLoading = (state) => state.cards.isLoading
export const useLoadMore = (state) => state.cards.isLoadNewData
export const useModalStatus = (state) => state.cards.modalStatus
export const useTheme = (state) => state.cards.theme

export const { getNextPage, showModal, switchTheme } = cardSlice.actions
export default cardSlice.reducer
