import { Grid, Typography } from '@mui/material'
import useGlobal from '../../hooks/useGlobal'
import { CustomChip } from '../../styles/chip'
import {
  CustomHero,
  CustomMainHero,
  CustomSecondaryHero,
  CustomTitleArticleHero
} from './style'

function Hero() {
  const {
    heroContent: { main, secondary }
  } = useGlobal()

  return (
    <CustomHero>
      <Grid container spacing={2}>
        <Grid item md={5} sm={12}>
          <CustomMainHero
            sx={{
              backgroundImage: `url(${main?.featured_media.large})`
            }}
          >
            <CustomTitleArticleHero>
              <CustomChip color='primary' label={main?.categories[0].name}></CustomChip>
              <Typography variant='h3' color='white'>
                {`${main?.excerpt.slice(0, 122)}...`}
              </Typography>
            </CustomTitleArticleHero>
          </CustomMainHero>
        </Grid>
        <Grid item container md={7} sm={12} spacing={2}>
          {secondary?.map((item) => (
            <Grid item sm={6} key={item.id}>
              <CustomSecondaryHero
                sx={{
                  backgroundImage: `url(${item.featured_media.medium})`
                }}
              >
                <CustomTitleArticleHero>
                  <CustomChip color='primary' label={item?.categories[0].name} />
                  <Typography variant='h5' color='white'>
                    {`${item?.excerpt.slice(0, 80)}...`}
                  </Typography>
                </CustomTitleArticleHero>
              </CustomSecondaryHero>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </CustomHero>
  )
}

export default Hero
