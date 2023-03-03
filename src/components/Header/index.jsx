import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { AppBar, Container, IconButton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-outlined.svg'
import useGlobal from '../../hooks/useGlobal'
import useRequests from '../../hooks/useRequests'
import { CustomSearchInput, CustomToolbar } from './style'

function Header() {
  const navigate = useNavigate()
  const { getListArticles } = useRequests()
  const [openSearchInput, setOpenSeachInput] = useState(false)
  const { search, setSearch, articles, notFound, setNotFound } = useGlobal()

  function handleToggleSeachInput() {
    setOpenSeachInput(!openSearchInput)
  }

  async function handleSearch(e) {
    if (e.key !== 'Enter') return
    navigate('/')
    await getListArticles()
  }

  useEffect(() => {
    if (!articles.length && search) {
      setNotFound(true)
    } else if (articles.length) {
      setNotFound(false)
    }
  }, [articles, search, setNotFound])

  return (
    <AppBar position='static'>
      <Container disableGutters>
        <CustomToolbar>
          <IconButton color='inherit'>
            <MenuIcon sx={{ fontSize: 35 }} />
          </IconButton>
          <Stack direction='row' gap={2} alignItems='center'>
            <Link to='/'>
              <img className='image-logo' src={logo} alt='Logo' />
            </Link>
            <Typography variant='h2' noWrap>
              Mejor com Salud
            </Typography>
          </Stack>
          <IconButton color='inherit' onClick={handleToggleSeachInput}>
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
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => handleSearch(e)}
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
