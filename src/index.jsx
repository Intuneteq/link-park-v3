import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react'

import App from './App'
import { store } from './store'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider disableBaseline={true}>
        <Provider store={store}>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </Provider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
)
