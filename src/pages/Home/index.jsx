/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ListArticles from '../../components/ListArticles'
import useGlobal from '../../hooks/useGlobal'
import useRequests from '../../hooks/useRequests'
import { CustomContainerPage } from '../../styles/container'
import { CustomContentHome } from './style'

function Home() {
  const { getHeroContent } = useRequests()
  const { articles } = useGlobal()

  useEffect(() => {
    getHeroContent()
  }, [])

  return (
    <CustomContainerPage>
      <Header />
      <CustomContentHome disableGutters>
        {articles.length ? <ListArticles /> : <Hero />}
      </CustomContentHome>
      <Footer />
    </CustomContainerPage>
  )
}

export default memo(Home)
