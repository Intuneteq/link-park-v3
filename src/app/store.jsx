import { combineReducers, configureStore } from '@reduxjs/toolkit'

// Reducers
import { apiSlice } from './api/apiSlice'
import authReducer from '../pages/auth/api/authSlice'
import guardianReducer from '../pages/parent/api/guardianSlice'

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  guardian: guardianReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})
