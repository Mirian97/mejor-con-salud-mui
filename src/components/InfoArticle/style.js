import styled from '@emotion/styled'
import { Container, css } from '@mui/material'

export const CustomInfoArticle = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4px;

    .container-chip {
      .item-chip {
        cursor: pointer;
      }
    }
  `}
`
