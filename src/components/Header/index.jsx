import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { AppBar, Container, IconButton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useState } from 'react'
import logo from '../../assets/logo-outlined.svg'
import { CustomSearchInput, CustomToolbar } from './style'

function Header() {
  const [openSearchInput, setOpenSeachInput] = useState(false)

  function handleToggleSeachInput() {
    setOpenSeachInput(!openSearchInput)
  }

  return (
    <AppBar position='static'>
      <Container disableGutters>
        <CustomToolbar>
          <IconButton color='inherit'>
            <MenuIcon sx={{ fontSize: 35 }} />
          </IconButton>
          <Stack direction='row' gap={2} alignItems='center'>
            <img className='image-logo' src={logo} alt='Logo' />
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
          <Stack my={3} direction='row' justifyContent='center'>
            <CustomSearchInput
              type='search'
              placeholder='Buscar por artículo...'
              sx={{ width: 500 }}
            />
          </Stack>
        )}
      </Container>
    </AppBar>
  )
}

export default Header
