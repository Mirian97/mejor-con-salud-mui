import { CircularProgress } from '@mui/material'

function Backdrop({ open, handleClose }) {
  return (
    <Backdrop
      sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}

export default Backdrop
