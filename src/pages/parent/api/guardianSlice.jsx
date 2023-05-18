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
      const students = action.payload.map((student) => {
        return {
          id: student.id,
          name: student.first_name + ' ' + student.last_name,
        }
      })
      state.students = [...students]
    },
  },
})

export const selectGuardianStudents = (state) => state.guardian.students

export const { setGuardianStudents } = guardianSlice.actions
export default guardianSlice.reducer
