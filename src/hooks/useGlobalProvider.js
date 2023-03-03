import { useState } from 'react'
import { useLocalStorage } from 'react-use'

function useGlobalProvider() {
  const [search, setSearch] = useState(0)
  const [heroContent, setHeroContent] = useState({})
  const [articles, setArticles] = useState([])
  const [article, setArticle, removeArticle] = useLocalStorage('article')
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [orderByRelevance, setOrderByRelevance] = useState(false)
  const [notFound, setNotFound] = useState(false)

  return {
    search,
    setSearch,
    heroContent,
    setHeroContent,
    articles,
    setArticles,
    article,
    setArticle,
    removeArticle,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    orderByRelevance,
    setOrderByRelevance,
    notFound,
    setNotFound
  }
}

export default useGlobalProvider
