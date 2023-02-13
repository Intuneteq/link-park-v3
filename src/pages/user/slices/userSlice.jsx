import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  parent: false,
  student: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    selectParent: (state, action) => {
      state.student = !action.payload
      state.parent = action.payload
    },
    selectStudent: (state, action) => {
      state.parent = !action.payload
      state.student = action.payload
    },
  },
})

export const { selectParent, selectStudent } = userSlice.actions

export default userSlice.reducer
