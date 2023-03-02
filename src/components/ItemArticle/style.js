import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomItemArticle = styled('section')`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.palette.grey[500]};
    cursor: pointer;
    display: flex;
    gap: 16px;
    padding-bottom: 16px;
    width: 100%;

    .article-image {
      width: 250px;
      height: 150px;
      border-radius: 5px;
    }

    .article-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    :hover {
      .article-short-text {
        text-decoration: underline;
      }
      .article-image {
        filter: brightness(0.8);
      }
    }
  `}
`
