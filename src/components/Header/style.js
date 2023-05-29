import styled from '@emotion/styled'
import { css, TextField, Toolbar } from '@mui/material'

export const CustomToolbar = styled(Toolbar)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    margin: 0 56px;
    flex-grow: 1;

    .image-logo {
      width: 60px;
    }

    ${theme.breakpoints.down('sm')} {
      margin: 0 16px;
    }
  `}
`

export const CustomSearchInput = styled(TextField)`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.light};
    border-radius: 10px;
    border: 1px solid ${theme.palette.primary};
    width: 350px;

    :hover {
      border: 2px solid white;
    }

    ${theme.breakpoints.down('sm')} {
      max-width: 300px;
    }
  `}
`
