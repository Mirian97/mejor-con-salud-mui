import { CircularProgress } from '@mui/material'
import { default as React, Suspense, lazy, memo, useEffect } from 'react'
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
  const { articles } = useGlobal()

  useEffect(() => {
    getHeroContent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default memo(Home)
