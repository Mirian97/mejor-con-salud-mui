import { useState } from 'react'

function useGlobalProvider() {
  const [search, setSearch] = useState(0)
  const [heroContent, setHeroContent] = useState({})

  return {
    search,
    setSearch,
    heroContent,
    setHeroContent
  }
}

export default useGlobalProvider
