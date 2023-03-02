import styled from '@emotion/styled'
import { Box, css, Paper } from '@mui/material'

export const CustomHero = styled(Box)`
  ${({ theme }) => css`
    width: 100%;
    min-height: 500px;
  `}
`

export const CustomMainHero = styled(Paper)`
  ${({ theme }) => css`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 550px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    :hover {
      filter: brightness(1.2);
    }

    ${theme.breakpoints.down('md')} {
      height: 350px;
    }
  `}
`

export const CustomSecondaryHero = styled(Paper)`
  ${({ theme }) => css`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 270px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    :hover {
      filter: brightness(1.2);
    }
  `}
`

export const CustomTitleArticleHero = styled('div')`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.8);
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 100px;
    margin-top: auto;
    padding: 24px;
    cursor: pointer;
  `}
`
