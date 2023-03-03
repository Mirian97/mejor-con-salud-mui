import { Divider, Typography } from '@mui/material'
import { CustomChip } from '../../styles/chip'
import { CustomItemArticle } from './style'

function ItemArticle({ image, category, shorText }) {
  return (
    <>
      <CustomItemArticle>
        <img className='article-image' src={image} alt={shorText} />
        <div className='article-content'>
          <CustomChip color='primary' label={category} />
          <Typography className='article-short-text' variant='h4'>
            {shorText}
          </Typography>
        </div>
      </CustomItemArticle>
      <Divider />
    </>
  )
}

export default ItemArticle
