import api from '../services/api'
import { messageError } from '../utils/toast'
import useGlobal from './useGlobal'

function useRequests() {
  const { setHeroContent, setArticle } = useGlobal()

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

  async function getArticle(idArticle) {
    try {
      const { data } = await api.get(`/v1/posts/${idArticle}`)
      setArticle(data)
    } catch (error) {
      messageError(error)
    }
  }

  return {
    getHeroContent,
    getArticle
  }
}

export default useRequests
