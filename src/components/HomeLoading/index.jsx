import CircularProgress from '@mui/material/CircularProgress'
import { CustomBackdrop } from './style'

function HomeLoading() {
  return (
    <CustomBackdrop open={true}>
      <CircularProgress color='inherit' />
    </CustomBackdrop>
  )
}

export default HomeLoading
