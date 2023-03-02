import NorthIcon from '@mui/icons-material/North'
import { Divider, Grid, Stack, Typography } from '@mui/material'
import useGlobal from '../../hooks/useGlobal'
import { CustomChip } from '../../styles/chip'
import { CustomItemArticle, CustomListArticles } from './style'

function ListArticles() {
  const {
    search,
    setSearch,
    articles,
    setArticles,
    heroContent: { main, secondary }
  } = useGlobal()

  return (
    <CustomListArticles disableGutters>
      <Stack direction='row' alignItems='center' mb={2}>
        <NorthIcon sx={{ fontSize: 25 }} />
        <Typography variant='h3'>Mais Relevantes</Typography>
      </Stack>
      <Grid container spacing={2}>
        {secondary.map((item) => (
          <Grid item sm={12}>
            <CustomItemArticle>
              <img
                className='article-image'
                src={item.featured_media.medium}
                alt={item.excerpt}
              />
              <div className='article-content'>
                <CustomChip color='primary' label={item?.categories[0].name} />
                <Typography
                  className='article-short-text'
                  variant='h4'
                >{`${item.excerpt.slice(0, 100)}...`}</Typography>
              </div>
              <Divider />
            </CustomItemArticle>
          </Grid>
        ))}
      </Grid>
    </CustomListArticles>
  )
}

export default ListArticles
