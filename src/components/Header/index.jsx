/* eslint-disable react-hooks/exhaustive-deps */
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { AppBar, Container, IconButton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-outlined.svg'
import useDebounce from '../../hooks/useDebounce'
import useGlobal from '../../hooks/useGlobal'
import useRequests from '../../hooks/useRequests'
import { CustomSearchInput, CustomToolbar } from './style'

function Header() {
  const { getListArticles } = useRequests()
  const [openSearchInput, setOpenSeachInput] = useState(false)
  const { search, setSearch, notFound, setNotFound } = useGlobal()
  const debouncedInputSearch = useDebounce(search)
  const [isSearching, setIsSearching] = useState(false)

  function toggleSearchInput() {
    setOpenSeachInput(!openSearchInput)
  }

  async function handleSearch(e) {
    const searchTerm = e.target.value
    setSearch(searchTerm)
    setIsSearching(true)
    await getListArticles(debouncedInputSearch)
    setIsSearching(false)
  }

  useEffect(() => {
    setNotFound(!isSearching && notFound)
  }, [isSearching, notFound])

  return (
    <AppBar position='static'>
      <Container disableGutters>
        <CustomToolbar>
          <Stack direction='row' gap={2} alignItems='center'>
            <Link to='/'>
              <img className='image-logo' src={logo} alt='Logo' />
            </Link>
            <Typography variant='h2' noWrap>
              Mejor com Salud
            </Typography>
          </Stack>
          <IconButton color='inherit' onClick={toggleSearchInput}>
            {openSearchInput ? (
              <CloseIcon sx={{ fontSize: 35 }} />
            ) : (
              <SearchIcon sx={{ fontSize: 35 }} />
            )}
          </IconButton>
        </CustomToolbar>
        {openSearchInput && (
          <Stack my={3} direction='column' justifyContent='center' alignItems='center'>
            <CustomSearchInput
              type='search'
              placeholder='Buscar por artículo...'
              sx={{ width: 500 }}
              onChange={handleSearch}
            />
            {notFound && (
              <Typography variant='h3' textAlign='center' color='white' mt={2}>
                ¡No hay artículos relacionados con el término de búsqueda!
              </Typography>
            )}
          </Stack>
        )}
      </Container>
    </AppBar>
  )
}

export default Header
