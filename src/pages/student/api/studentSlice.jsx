import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  subjects: [],
}

const studentSlice = createSlice({
  name: 'students',
  initialState: STATE,
  reducers: {
    setSubjects: (state, action) => {
      state.subjects = action.payload
    },
  },
})

export const { setSubjects } = studentSlice.actions
export default studentSlice.reducer
