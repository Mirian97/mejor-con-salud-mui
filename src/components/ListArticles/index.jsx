import NorthIcon from '@mui/icons-material/North'
import { Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useGlobal from '../../hooks/useGlobal'
import useRequests from '../../hooks/useRequests'
import ItemArticle from '../ItemArticle'
import { CustomListArticles } from './style'

function ListArticles() {
  const { getArticle } = useRequests()
  const navigate = useNavigate()
  const {
    search,
    setSearch,
    articles,
    setArticles,
    article,
    setArticle,
    heroContent: { main, secondary }
  } = useGlobal()

  async function handleNavigateDetailArticle(idArticle) {
    await getArticle(idArticle)
    navigate('/detail-article')
  }

  return (
    <CustomListArticles disableGutters>
      <Stack direction='row' alignItems='center' mb={2}>
        <NorthIcon sx={{ fontSize: 25 }} />
        <Typography variant='h3'>Mais Relevantes</Typography>
      </Stack>
      <Grid container spacing={2}>
        {secondary?.map((item) => (
          <Grid
            item
            sm={12}
            key={item.id}
            onClick={() => handleNavigateDetailArticle(item.id)}
          >
            <ItemArticle
              image={item.featured_media.medium}
              category={item?.categories[0].name}
              shorText={item.excerpt}
            />
          </Grid>
        ))}
      </Grid>
    </CustomListArticles>
  )
}

export default ListArticles
