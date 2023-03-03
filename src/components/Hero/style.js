import styled from '@emotion/styled'
import { Box, css, Paper } from '@mui/material'

export const CustomHero = styled(Box)`
  width: 100%;
  min-height: 500px;
`

export const CustomMainHero = styled(Paper)`
  ${({ theme }) => css`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 560px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    :hover {
      filter: brightness(0.8);
    }

    ${theme.breakpoints.down('md')} {
      height: 350px;
    }
  `}
`

export const CustomSecondaryHero = styled(Paper)`
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
    filter: brightness(0.8);
  }
`

export const CustomTitleArticleHero = styled('div')`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 100px;
  margin-top: auto;
  padding: 24px;
  cursor: pointer;
`
