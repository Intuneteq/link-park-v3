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
