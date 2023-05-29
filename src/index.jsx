import { ThemeProvider } from '@mui/material'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomeLoading from './components/HomeLoading'
import { GlobalProvider } from './contexts/GlobalContext'
import MainRoutes from './routes'
import './styles/index.css'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <Suspense fallback={<HomeLoading />}>
            <MainRoutes />
          </Suspense>
        </ThemeProvider>
      </GlobalProvider>
    </React.StrictMode>
  </BrowserRouter>
)
