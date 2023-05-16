import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.originalStatus === 401) {
    console.log('sending refresh Token')

    // Send refresh token to get new access token
    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)
    console.log('refresh result', refreshResult)

    if (refreshResult?.data) {
      const user = api.getState().auth.user

      // Store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }))

      // Retry original Query with new access token
      result = await baseQuery(args, api, extraOptions)
    }
  } else {
    api.dispatch(logOut())
  }
  return result
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['school'],
  endpoints: (builder) => ({}),
})
