import styled from '@emotion/styled'
import { Container, css } from '@mui/material'

export const CustomListArticles = styled(Container)`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    .relevance {
      cursor: pointer;
    }

    .pagination {
      margin-top: 20px;
    }
  `}
`
