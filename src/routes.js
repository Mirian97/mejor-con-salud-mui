import { Route, Routes } from 'react-router-dom'
import DetailArticle from './pages/DetailArticle'
import Home from './pages/Home'

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/detail-article' exact element={<DetailArticle />} />
    </Routes>
  )
}

export default MainRoutes
