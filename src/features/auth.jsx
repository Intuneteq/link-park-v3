// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// // Base url
// const base_URL = 'http://localhost:8000/api/v1'

// // Fetch all schools.
// // First argument is a string used as the prefix for the generated action type
// export const fetchSchools = createAsyncThunk(
//   'schools/fetchSchools',
//   async () => {
//     try {
//       const response = await axios.get(`${base_URL}/school`)
//       return [...response.data.data]
//     } catch (error) {
//       console.error(error)
//       return error.message
//     }
//   }
// )

// export const register = createAsyncThunk('user/register', async (data) => {
//   const response = await axios.post(`${base_URL}/auth/register`, data)
//   return response.data
// })

// const initialState = {
//   schools: [],
//   schoolStatus: 'idle', // 'idle', | 'loading' | 'succeeded' | 'failed'
//   schoolError: null,
//   user: {},
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(fetchSchools.pending, (state) => {
//         state.schoolStatus = 'loading'
//       })
//       .addCase(fetchSchools.fulfilled, (state, action) => {
//         state.schoolStatus = 'succeeded'
//         state.schools = action.payload
//       })
//       .addCase(fetchSchools.rejected, (state, action) => {
//         state.schoolStatus = 'failed'
//         state.error = action.error.message
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = { ...action.payload.data.data }
//       })
//   },
// })

// // Schools
// export const selectAllSchools = (state) => state.auth.schools
// export const getSchoolsStatus = (state) => state.auth.schoolStatus
// export const getSchoolsError = (state) => state.auth.schoolError

// // Users
// export const getUser = (state) => state.auth.user

// export default authSlice.reducer

import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from './api'

const schoolAdapter = createEntityAdapter()
const initialState = schoolAdapter.getInitialState()

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSchools: builder.query({
      query: () => '/school',
      transformResponse: (res) => {
        const allSchools = res.data.map((school) => {
          return { id: school.id, value: school.id, label: school.name }
        })
        return schoolAdapter.setAll(initialState, allSchools)
      },
      providesTags: (result, error, arg) => [
        { type: 'school', id: 'LIST' },
        ...result.ids.map((id) => ({ type: 'school', id })),
      ],
      //   providesTags: ['schools'], // Used to inavlidate fetch query's tag
    }),
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetSchoolsQuery, useRegisterMutation } = authApiSlice

// returns the query result object
export const selectSchoolsResult = authApiSlice.endpoints.getSchools.select()

// Creates memoized selector
const selectAllSchoolsData = createSelector(
  selectSchoolsResult,
  (schoolsResult) => schoolsResult.data // Normalized state object with Ids & entities
)

// getSelectors create these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllSchools,
  selectById: selectSchoolById,
  selectIds: selectSchoolIds,
  // Pass in a selector that returns the slice of state
} = schoolAdapter.getSelectors(
  (state) => selectAllSchoolsData(state) ?? initialState
)
