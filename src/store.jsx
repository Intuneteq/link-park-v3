import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/api'

// //import reducers here
// import authReducer from './features/auth'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
