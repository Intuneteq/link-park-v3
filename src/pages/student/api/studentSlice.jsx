import { createSlice, createSelector } from '@reduxjs/toolkit'

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
export const selectSubjectById = (subjectId) =>
  createSelector(
    (state) => state.students.subjects,
    (subjects) => subjects.find((subject) => subject.id === subjectId)
  )
export default studentSlice.reducer
