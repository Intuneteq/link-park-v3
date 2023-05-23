import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../../../app/api/apiSlice'

const schoolAdapter = createEntityAdapter()
const initialState = schoolAdapter.getInitialState()

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSchools: builder.query({
      query: () => '/school',
      transformResponse: (res) => {
        console.log('res', res)
        const allSchools = res.data.map((school) => {
          return { id: school.id, value: school.id, label: school.name }
        })
        return schoolAdapter.setAll(initialState, allSchools)
      },
      keepUnusedDataFor: 1,
      providesTags: (result) => [
        { type: 'school', id: 'LIST' },
        ...result.ids.map((id) => ({ type: 'school', id })),
      ],
    }),
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
      transformResponse: (res) => res.data, // Transform the response as needed
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetSchoolsQuery,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
} = authApiSlice

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
