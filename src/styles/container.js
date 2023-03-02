import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomContainerPage = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
  `}
`
