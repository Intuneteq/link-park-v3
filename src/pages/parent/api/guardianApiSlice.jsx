import { apiSlice } from '../../../app/api/apiSlice'

export const guardianApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudentsByGuardianId: builder.query({
      query: (guardianID) => `/user/guardian/${guardianID}`,
      transformResponse: (res) => res.data,
    }),
  }),
})

export const { useGetStudentsByGuardianIdQuery } = guardianApiSlice
