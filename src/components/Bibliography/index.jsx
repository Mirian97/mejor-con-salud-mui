import { Typography } from '@mui/material'
import { CustomBibliography } from './style'

function Bibliography({ body }) {
  return (
    <CustomBibliography>
      <Typography variant='h3' color='primary'>
        Bibliografía
      </Typography>
      <div className='bibliography' dangerouslySetInnerHTML={{ __html: body }} />
    </CustomBibliography>
  )
}

export default Bibliography
