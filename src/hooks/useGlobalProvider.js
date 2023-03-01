import { useState } from 'react'

function useGlobalProvider() {
  const [search, setSearch] = useState(0)

  return {
    search,
    setSearch
  }
}

export default useGlobalProvider
