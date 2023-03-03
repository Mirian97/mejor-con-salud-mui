import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomFooter = styled('footer')`
  ${({ theme }) => css`
    background-color: #28282a;
    margin-top: auto;
    width: 100%;

    .footer-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 92px;

      .links-to-page {
        display: flex;
        align-items: center;
        gap: 40px;

        .image-logo {
          width: 40px;
          cursor: pointer;
        }

        h6 {
          cursor: pointer;

          :hover {
            color: ${theme.palette.primary.main};
          }
        }
      }

      .social-media {
        display: flex;
        align-items: center;
        gap: 10px;

        .social-media-item {
          img {
            width: 25px;
            cursor: pointer;
          }
        }
      }

      ${theme.breakpoints.down('sm')} {
        flex-direction: column;
        gap: 20px;
      }
    }
  `}
`
