import { Typography } from '@mui/material'
import { CustomArticleChip } from '../../styles/chip'
import { CustomInfoArticle } from './style'

function InfoArticle({ title, author, date, category }) {
  return (
    <CustomInfoArticle>
      <Typography variant='h1' color='primary' mb={1}>
        {title}
      </Typography>
      <Typography variant='h5' color='grey.300'>
        {author}
      </Typography>
      <Typography variant='h5' color='grey.300'>
        Data de publicação: {date}
      </Typography>
      <div className='container-chip'>
        <CustomArticleChip className='item-chip' color='primary' label={category} />
      </div>
    </CustomInfoArticle>
  )
}

export default InfoArticle
