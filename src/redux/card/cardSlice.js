import { createSlice } from '@reduxjs/toolkit'
import {
  fetchAllStartsShips,
  fetchLoadMoreData,
  fetchStarsShipsByQuery,
} from '../service/cardServices'

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    data: [],
    isLoading: false,
    isLoadNewData: false,
    nextPage: '',
  },
  reducers: {
    getNextPage: (state, action) => {
      state.nextPage = action.payload
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

export const { getNextPage } = cardSlice.actions
export default cardSlice.reducer
