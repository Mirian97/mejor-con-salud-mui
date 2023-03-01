import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomExample = styled('div')`
  ${({ theme }) => css`
    color: ${theme.palette.primary};
  `}
`
