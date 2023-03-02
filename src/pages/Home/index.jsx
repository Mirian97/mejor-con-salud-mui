import { useEffect } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ListArticles from '../../components/ListArticles'
import useRequests from '../../hooks/useRequests'
import { CustomContentHome } from './style'

function Home() {
  const { getHeroContent } = useRequests()

  useEffect(() => {
    getHeroContent()
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
