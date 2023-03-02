import { CustomBodyArticle } from './style'

function BodyArticle({ body }) {
  return (
    <CustomBodyArticle className='content' dangerouslySetInnerHTML={{ __html: body }} />
  )
}

export default BodyArticle
