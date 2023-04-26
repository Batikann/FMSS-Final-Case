import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'https://swapi.dev/api/starships/'

//Here, using Redux Toolkit, we are making a request to our API with axios via the createAsyncThunk method and fetching all the data.
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

//We use this service when we want to load more data.
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

//We use this service when we want to retrieve data based on the ship name or model provided by the user.
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
