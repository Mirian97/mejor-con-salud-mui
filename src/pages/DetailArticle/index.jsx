import { CircularProgress } from '@mui/material'
import { default as React, lazy, Suspense } from 'react'
import useGlobal from '../../hooks/useGlobal'
import { CustomContainerPage } from '../../styles/container'
import { CustomContentArticle } from './style'
const Bibliography = lazy(() => import('../../components/Bibliography'))
const BodyArticle = lazy(() => import('../../components/BodyArticle'))
const Footer = lazy(() => import('../../components/Footer'))
const Header = lazy(() => import('../../components/Header'))
const InfoArticle = lazy(() => import('../../components/InfoArticle'))

function DetailArticle() {
  const { article } = useGlobal()

  return (
    <Suspense fallback={<CircularProgress color='inherit' />}>
      <CustomContainerPage>
        <Header />
        <CustomContentArticle disableGutters>
          <InfoArticle
            title={article.title}
            author={article.author.name}
            date={article.modified}
            category={article.categories[0].name}
          />
          <BodyArticle body={article.content} />
          <Bibliography body={article.bibliography} />
        </CustomContentArticle>
        <Footer />
      </CustomContainerPage>
    </Suspense>
  )
}

export default DetailArticle
