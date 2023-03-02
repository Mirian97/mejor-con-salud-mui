import styled from '@emotion/styled'
import { Container, css } from '@mui/material'

export const CustomContentArticle = styled(Container)`
  ${({ theme }) => css`
    padding: 25px 92px 60px;
    font-family: 'Montserrat', sans-serif;

    .info-article {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .container-chip {
        .item-chip {
          cursor: pointer;
        }
      }
    }
  `}
`
