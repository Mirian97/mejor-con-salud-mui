import styled from '@emotion/styled'
import { Chip, css } from '@mui/material'

export const CustomChip = styled(Chip)`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 3px;
    width: 250px;
  `}
`
