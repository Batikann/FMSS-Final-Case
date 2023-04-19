import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'https://swapi.dev/api/starships/'

export const fetchAllStartsShips = createAsyncThunk(
  'fetchAllStartsShips',
  async () => {
    const { data: res } = await axios.get(`${API_URL}`)
    const data = await res
    return data
  }
)

export const fetchLoadMoreData = createAsyncThunk(
  'nextPage',
  async (nextPage) => {
    const { data: res } = await axios.get(`${nextPage}`)
    const data = await res
    return data
  }
)

export const fetchStarsShipsByQuery = createAsyncThunk(
  'fetchStarsShips',
  async (query) => {
    const { data: res } = await axios.get(`${API_URL}?search=${query}`)
    const data = await res
    return data
  }
)
