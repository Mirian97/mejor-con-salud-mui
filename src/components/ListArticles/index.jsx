import NorthIcon from '@mui/icons-material/North'
import { CircularProgress, Grid, Pagination, Stack, Typography } from '@mui/material'
import { default as React, lazy, Suspense, useEffect } from 'react'
import useGlobal from '../../hooks/useGlobal'
import useRequests from '../../hooks/useRequests'
import { CustomListArticles } from './style'
const ItemArticle = lazy(() => import('../ItemArticle'))

function ListArticles() {
  const { getListArticles, handleNavigateDetailArticle } = useRequests()
  const {
    articles,
    currentPage,
    setCurrentPage,
    totalPages,
    orderByRelevance,
    setOrderByRelevance
  } = useGlobal()

  async function handleOrderByRelevance() {
    await getListArticles()
    setCurrentPage(1)
    setOrderByRelevance(false)
  }

  useEffect(() => {
    getListArticles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  useEffect(() => {
    if (true) {
      handleOrderByRelevance()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderByRelevance])

  return (
    <Suspense fallback={<CircularProgress />}>
      {articles.length ? (
        <CustomListArticles disableGutters>
          <Stack
            direction='row'
            alignItems='center'
            mb={2}
            className='relevance'
            onClick={() => setOrderByRelevance(true)}
          >
            <NorthIcon sx={{ fontSize: 25 }} />
            <Typography variant='h3'>Mais Relevantes</Typography>
          </Stack>
          <Grid container spacing={2}>
            {articles?.map((item) => (
              <Grid
                item
                sm={12}
                key={item.id}
                onClick={() => handleNavigateDetailArticle(item.id)}
              >
                <ItemArticle
                  image={item.featured_media.medium}
                  category={item.categories[0].name}
                  shorText={item.headline}
                />
              </Grid>
            ))}
          </Grid>
          <Stack direction='row' justifyContent='center'>
            <Pagination
              count={totalPages}
              onChange={(e, value) => setCurrentPage(value)}
              className='pagination'
              page={currentPage}
            />
          </Stack>
        </CustomListArticles>
      ) : (
        ''
      )}
    </Suspense>
  )
}

export default ListArticles
