import { apiSlice } from '../api'
import { setGuardianStudents } from '../../../features/guardians./../pages/parent/api/guardianSlice'

export const guardianApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudentsByGuardianId: builder.mutation({
      query: (guardianID) => ({
        url: `/user/guardian/${guardianID}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setGuardianStudents(data.data))
        } catch (err) {
          console.log(err)
        }
      },
    }),
  }),
})

export const { useGetStudentsByGuardianIdMutation } = guardianApiSlice
