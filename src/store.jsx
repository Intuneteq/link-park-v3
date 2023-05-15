import { configureStore } from '@reduxjs/toolkit'

//import reducers here
import authReducer from './features/auth'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
