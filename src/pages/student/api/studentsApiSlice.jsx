import { apiSlice } from '../../../app/api/apiSlice'

export const studentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSubjects: builder.query({
      query: () => '/students/subjects',
      transformResponse: (res) => res.data,
      providesTags: 'students',
    }),
    getSubjectById: builder.query({
      query: (subjectID) => `/students/subjects/${subjectID}`,
      transformResponse: (res) => res.data,
      providesTags: ['students'],
    }),
  }),
})

export const { useGetAllSubjectsQuery, useGetSubjectByIdQuery } =
  studentsApiSlice
