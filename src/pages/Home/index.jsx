/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ListArticles from '../../components/ListArticles'
import useRequests from '../../hooks/useRequests'
import { CustomContainerPage } from '../../styles/container'
import { CustomContentHome } from './style'

function Home() {
  const { getHeroContent } = useRequests()

  useEffect(() => {
    getHeroContent()
  }, [])

  return (
    <CustomContainerPage>
      <Header />
      <CustomContentHome disableGutters>
        <Hero />
        <ListArticles />
      </CustomContentHome>
      <Footer />
    </CustomContainerPage>
  )
}

export default memo(Home)
