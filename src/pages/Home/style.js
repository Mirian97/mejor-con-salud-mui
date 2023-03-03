import styled from '@emotion/styled'
import { Container, css } from '@mui/material'

export const CustomContentHome = styled(Container)`
  ${({ theme }) => css`
    padding: 25px 92px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  `}
`
