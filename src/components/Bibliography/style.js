import styled from '@emotion/styled'

export const CustomBibliography = styled('div')`
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
`
