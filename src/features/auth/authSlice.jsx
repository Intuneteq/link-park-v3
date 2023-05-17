import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { fullName: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { fullName, accessToken } = action.payload
      state.fullName = fullName
      state.token = accessToken
    },
    logOut: (state) => {
      state.fullName = null
      state.token = null
    },
  },
})

export const selectCurrentUser = (state) => state.auth.fullName
export const selectCurrentToken = (state) => state.auth.token

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
