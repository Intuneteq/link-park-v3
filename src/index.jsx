import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { NextUIProvider } from '@nextui-org/react'

import App from './App'
import { apiSlice } from './features/api'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <NextUIProvider disableBaseline={true}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </ApiProvider>
  </React.StrictMode>
)
