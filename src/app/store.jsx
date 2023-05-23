import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import thunk from 'redux-thunk'

// Reducers
import { apiSlice } from './api/apiSlice'
import authReducer from '../pages/auth/api/authSlice'
import guardianReducer from '../pages/parent/api/guardianSlice'

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  blackList: [],
}

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  guardian: guardianReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk, apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
