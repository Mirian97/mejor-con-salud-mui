import { useEffect } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ListArticles from '../../components/ListArticles'
import useGlobal from '../../hooks/useGlobal'
import api from '../../services/api'
import { CustomContentHome } from './style'

function Home() {
  const { setHeroContent } = useGlobal()

  async function getHero() {
    try {
      const { data } = await api.get('/v2/posts?page=1&orderby=relevance')
      const onlyWithImage = data.data.filter((item) => item.featured_media)
      setHeroContent({
        main: onlyWithImage[0],
        secondary: onlyWithImage.slice(1, 5)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHero()
  }, [])

  return (
    <div className='App'>
      <Header />
      <CustomContentHome disableGutters>
        <Hero />
        <ListArticles />
      </CustomContentHome>
    </div>
  )
}

export default Home
