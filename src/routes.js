import { ThemeProvider } from '@emotion/react'
import { Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './contexts/GlobalContext'
import DetailArticle from './pages/DetailArticle'
import Home from './pages/Home'
import { theme } from './theme'

function MainRoutes() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/detail-article' exact element={<DetailArticle />} />
        </Routes>
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default MainRoutes
