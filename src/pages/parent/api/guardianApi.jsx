import { apiSlice } from '../../../app/api'
// import { setGuardianStudents } from './guardianSlice'

// export const guardianApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getStudentsByGuardianId: builder.mutation({
//       query: (guardianID) => ({
//         url: `/user/guardian/${guardianID}`,
//         method: 'GET',
//       }),
//       transformResponse: (res) => {
//         console.log('success fetch', res)
//         return res
//       },
//       // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//       //   try {
//       //     const { data } = await queryFulfilled
//       //     console.log('success fetch', data)
//       //     // dispatch(setGuardianStudents(data.data))
//       //   } catch (err) {
//       //     console.log(err)
//       //   }
//       // },
//     }),
//   }),
// })

// export const { useGetStudentsByGuardianIdMutation } = guardianApiSlice

export const guardianApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudentsByGuardianId: builder.query({
      query: (guardianID) => `/user/guardian/${guardianID}`,
      transformResponse: (res) => res.data,
    }),
  }),
})

export const { useGetStudentsByGuardianIdQuery } = guardianApiSlice
