/* eslint-disable react-hooks/exhaustive-deps */
import NorthIcon from '@mui/icons-material/North'
import { Grid, Pagination, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import useDebounce from '../../hooks/useDebounce'
import useGlobal from '../../hooks/useGlobal'
import useRequests from '../../hooks/useRequests'
import ItemArticle from '../ItemArticle'
import { CustomListArticles } from './style'

function ListArticles() {
  const { search, articles, currentPage, setCurrentPage, totalPages } = useGlobal()
  const { getListArticles, handleNavigateDetailArticle } = useRequests()
  const debouncedInputSearch = useDebounce(search)

  async function handleOrderByRelevance() {
    await getListArticles(debouncedInputSearch, true)
    setCurrentPage(1)
  }

  useEffect(() => {
    getListArticles(debouncedInputSearch, false, currentPage)
  }, [currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [search])

  return (
    <>
      {articles.length ? (
        <CustomListArticles disableGutters>
          <Stack
            direction='row'
            alignItems='center'
            mb={2}
            className='relevance'
            onClick={handleOrderByRelevance}
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
    </>
  )
}

export default ListArticles
