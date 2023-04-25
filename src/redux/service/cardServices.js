import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'https://swapi.dev/api/starships/'

export const fetchAllStartsShips = createAsyncThunk(
  'fetchAllStartsShips',
  async () => {
    try {
      const { data: res } = await axios.get(`${API_URL}`)
      const data = await res
      return data
    } catch (error) {
      window.alert(error)
    }
  }
)

export const fetchLoadMoreData = createAsyncThunk(
  'nextPage',
  async (nextPage) => {
    try {
      const { data: res } = await axios.get(`${nextPage}`)
      const data = await res
      return data
    } catch (error) {
      window.alert(error)
    }
  }
)

export const fetchStarsShipsByQuery = createAsyncThunk(
  'fetchStarsShips',
  async (query) => {
    try {
      const { data: res } = await axios.get(`${API_URL}?search=${query}`)
      const data = await res
      return data
    } catch (error) {
      window.alert(error)
    }
  }
)
