import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  students: [],
  activeStudent: { isActive: false },
}

const guardianSlice = createSlice({
  name: 'guardian',
  initialState: STATE,
  reducers: {
    setGuardianStudents: (state, action) => {
      state.students = [...action.payload]
    },
  },
})

export const selectGuardianStudents = (state) => state.guardian.students

export const { setGuardianStudents } = guardianSlice.actions
export default guardianSlice.reducer
