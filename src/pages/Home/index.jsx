import { CircularProgress } from '@mui/material'
import { default as React, lazy, Suspense, useEffect } from 'react'
import useGlobal from '../../hooks/useGlobal'
import useRequests from '../../hooks/useRequests'
import { CustomContainerPage } from '../../styles/container'
import { CustomContentHome } from './style'
const Footer = lazy(() => import('../../components/Footer'))
const Header = lazy(() => import('../../components/Header'))
const Hero = lazy(() => import('../../components/Hero'))
const ListArticles = lazy(() => import('../../components/ListArticles'))

function Home() {
  const { getHeroContent } = useRequests()
  const { articles, search } = useGlobal()

  useEffect(() => {
    getHeroContent()
  }, [])

  return (
    <Suspense fallback={<CircularProgress color='inherit' />}>
      <CustomContainerPage>
        <Header />
        <CustomContentHome disableGutters>
          <Hero />
          {articles && <ListArticles />}
        </CustomContentHome>
        <Footer />
      </CustomContainerPage>
    </Suspense>
  )
}

export default Home
