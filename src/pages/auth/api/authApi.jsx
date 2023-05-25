import { apiSlice } from '../../../app/api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSchools: builder.query({
      query: () => '/school',
      transformResponse: (res) => {
        console.log('res', res)
        return res.data.map((school) => {
          return { id: school.id, value: school.id, label: school.name }
        })
      },
      providesTags: ['School'],
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
