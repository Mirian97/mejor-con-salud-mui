import { memo } from 'react'
import Bibliography from '../../components/Bibliography'
import BodyArticle from '../../components/BodyArticle'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import InfoArticle from '../../components/InfoArticle'
import useGlobal from '../../hooks/useGlobal'
import { CustomContainerPage } from '../../styles/container'
import { CustomContentArticle } from './style'

function DetailArticle() {
  const { article } = useGlobal()

  return (
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
  )
}

export default memo(DetailArticle)
