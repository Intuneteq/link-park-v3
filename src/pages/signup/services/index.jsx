import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Base url
const base_URL = 'http://localhost:8000/api/v1'

// Fetch all schools.
// First argument is a string used as the prefix for the generated action type
export const fetchSchools = createAsyncThunk(
  'schools/fetchSchools',
  async () => {
    try {
      const response = await axios.get(`${base_URL}/school`)
      return [...response.data.data]
    } catch (error) {
      console.error(error)
      return error.message
    }
  }
)

const initialState = {
  schools: [],
  status: 'idle', // 'idle', | 'loading' | 'succeeded' | 'failed'
  error: null,
}

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSchools.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchSchools.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.schools = action.payload
      })
      .addCase(fetchSchools.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectAllSchools = (state) => state.signUp.schools
export const getSchoolsStatus = (state) => state.signUp.status
export const getSchoolsError = (state) => state.signUp.error

export default signUpSlice.reducer
