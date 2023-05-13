import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'

//import reducers here
import userReducer from './pages/user/slices/userSlice'
import signUpReducer from './pages/signup/services'
// import { apiSlice } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    signUp: signUpReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
})

// setupListeners(store.dispatch)
