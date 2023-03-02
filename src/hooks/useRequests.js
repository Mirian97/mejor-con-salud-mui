import api from '../services/api'
import { messageError } from '../utils/toast'
import useGlobal from './useGlobal'

function useRequests() {
  const { setHeroContent } = useGlobal()

  async function getHeroContent() {
    try {
      const { data } = await api.get('/v2/posts?page=1&orderby=relevance')
      const onlyWithImage = data.data.filter((item) => item.featured_media)
      setHeroContent({
        main: onlyWithImage[0],
        secondary: onlyWithImage.slice(1, 5)
      })
    } catch (error) {
      messageError(error)
    }
  }

  return {
    getHeroContent
  }
}

export default useRequests
