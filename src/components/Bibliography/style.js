import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomBibliography = styled('div')`
  ${({ theme }) => css`
    margin-top: 2rem;

    .bibliography {
      ul,
      ol {
        margin: 8px 0;
        display: flex;
        flex-direction: column;
        gap: 8px;

        li {
          font-size: 1.6rem;
        }
      }
    }
  `}
`
