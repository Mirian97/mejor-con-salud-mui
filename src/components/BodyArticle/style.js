import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomBodyArticle = styled('div')`
  ${({ theme }) => css`
    h2,
    h3 {
      font-size: 2rem;
      color: ${theme.palette.primary.main};
      margin: 20px 0 10px;
    }

    p {
      font-size: 1.6rem;
      margin: 8px 0;
      text-align: justify;
    }

    a {
      color: ${theme.palette.primary.main};
    }

    ul,
    ol {
      li {
        font-size: 1.4rem;
        list-style-type: disc;
        margin: 4px 40px;
      }
    }

    blockquote {
      text-align: right;
      margin: 20px 0;
    }

    figure {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-size: 1.4rem;
      margin: 20px 0;

      img {
        align-self: center;
        width: 500px;
        height: 300px;

        ${theme.breakpoints.down('sm')} {
          width: 300px;
          height: 200px;
        }
      }

      figcaption {
        margin: 8px 0;
      }
    }
  `}
`
