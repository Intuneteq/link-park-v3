import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import store from './app/store'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
let persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NextUIProvider disableBaseline={true}>
          <BrowserRouter>
            <Routes>
              <Route path='/*' element={<App />} />
            </Routes>
          </BrowserRouter>
        </NextUIProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
