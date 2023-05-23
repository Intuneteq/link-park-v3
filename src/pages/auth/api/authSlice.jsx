import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { fullName: null, token: null, id: null, userType: null },
  reducers: {
    setCredentials: (state, action) => {
      const { fullName, accessToken, id, userType } = action.payload
      state.fullName = fullName
      state.token = accessToken
      state.id = id
      state.userType = userType
    },
    logOut: (state) => {
      state.fullName = null
      state.token = null
      state.id = null
    },
  },
})

export const selectCurrentUserId = (state) => state.auth.id
export const selectCurrentUser = (state) => state.auth.fullName
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentUserType = (state) => state.auth.userType

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
