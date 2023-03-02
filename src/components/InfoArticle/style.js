import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomInfoArticle = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 20px;

    .container-chip {
      .item-chip {
        cursor: pointer;
      }
    }
  `}
`
