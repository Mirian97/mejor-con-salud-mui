import { useState } from 'react'
import { useLocalStorage } from 'react-use'

function useGlobalProvider() {
  const [search, setSearch] = useState(0)
  const [heroContent, setHeroContent] = useState({})
  const [articles, setArticles] = useState([])
  const [article, setArticle, removeArticle] = useLocalStorage('article')

  return {
    search,
    setSearch,
    heroContent,
    setHeroContent,
    articles,
    setArticles,
    article,
    setArticle,
    removeArticle
  }
}

export default useGlobalProvider
