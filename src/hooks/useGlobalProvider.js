import { useState } from 'react'

function useGlobalProvider() {
  const [search, setSearch] = useState(0)
  const [heroContent, setHeroContent] = useState({})
  const [articles, setArticles] = useState([])

  return {
    search,
    setSearch,
    heroContent,
    setHeroContent,
    articles,
    setArticles
  }
}

export default useGlobalProvider
