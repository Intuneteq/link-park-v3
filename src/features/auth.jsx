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

export const register = createAsyncThunk('user/register', async (data) => {
  const response = await axios.post(`${base_URL}/auth/register`, data)
  return response.data
})

const initialState = {
  schools: [],
  schoolStatus: 'idle', // 'idle', | 'loading' | 'succeeded' | 'failed'
  schoolError: null,
  user: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSchools.pending, (state) => {
        state.schoolStatus = 'loading'
      })
      .addCase(fetchSchools.fulfilled, (state, action) => {
        state.schoolStatus = 'succeeded'
        state.schools = action.payload
      })
      .addCase(fetchSchools.rejected, (state, action) => {
        state.schoolStatus = 'failed'
        state.error = action.error.message
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = { ...action.payload.data.data }
      })
  },
})

// Schools
export const selectAllSchools = (state) => state.auth.schools
export const getSchoolsStatus = (state) => state.auth.schoolStatus
export const getSchoolsError = (state) => state.auth.schoolError

// Users
export const getUser = (state) => state.auth.user

export default authSlice.reducer
