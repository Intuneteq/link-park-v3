import { configureStore } from '@reduxjs/toolkit'

//import reducers here
import userReducer from './pages/user/slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
