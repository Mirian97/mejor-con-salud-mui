import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { messageError } from '../utils/toast'
import useGlobal from './useGlobal'

function useRequests() {
  const navigate = useNavigate()
  const {
    setHeroContent,
    setArticle,
    articles,
    setArticles,
    setTotalPages,
    setNotFound
  } = useGlobal()

  async function getHeroContent() {
    try {
      const { data } = await api.get('/v2/posts?page=1&orderby=relevance')
      const onlyWithImage = data.data.filter((item) => item.featured_media)
      setHeroContent({
        main: onlyWithImage[0],
        secondary: onlyWithImage.slice(1, 5)
      })
    } catch (error) {
      messageError('Não foi possível carregar o conteúdo da página Home')
    }
  }

  async function getArticle(idArticle) {
    try {
      const { data } = await api.get(`/v1/posts/${idArticle}`)
      setArticle(data)
    } catch (error) {
      messageError('Não foi possível carregar o artigo')
    }
  }

  async function getListArticles(search, orderByRelevance, currentPage) {
    if (!search) return
    let url = `/v2/posts?search=${search}&orderby=relevance`
    if (orderByRelevance) {
      url = `/v2/posts?search=${search}&page=1&orderby=relevance`
    }
    if (currentPage > 0) {
      url = `/v2/posts?search=${search}&page=${currentPage}&orderby=relevance`
    }
    try {
      const { data } = await api.get(url)
      const filteredData = data.data.filter((article) => article.featured_media)
      setArticles(filteredData)
      setTotalPages(data.pages)
      setNotFound(articles.length === 0)
    } catch (error) {
      messageError('Não foi possível carregar a listagem de artigos')
      setNotFound(true)
    }
  }

  async function handleNavigateDetailArticle(idArticle) {
    await getArticle(idArticle)
    navigate('/detail-article')
  }

  return {
    getHeroContent,
    getArticle,
    getListArticles,
    handleNavigateDetailArticle
  }
}

export default useRequests
