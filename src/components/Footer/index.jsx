import { Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import facebookIcon from '../../assets/facebook-icon.svg'
import instagramIcon from '../../assets/instagram-icon.svg'
import logo from '../../assets/logo-outlined.svg'
import twitterIcon from '../../assets/twitter-icon.svg'
import { CustomFooter } from './style'

const socialMedia = [
  {
    image: instagramIcon,
    description: 'Logo do Instagram',
    link: 'https://www.instagram.com/mejorconsalud/'
  },
  {
    image: twitterIcon,
    description: 'Logo do Twitter',
    link: 'https://twitter.com/mejorconsalud'
  },
  {
    image: facebookIcon,
    description: 'Logo do Facebook',
    link: 'https://www.facebook.com/MejorconSalud943734/'
  }
]

function Footer() {
  return (
    <CustomFooter>
      <Container className='footer-content' disableGutters>
        <section className='links-to-page'>
          <Link to='/'>
            <img className='image-logo' src={logo} alt='Logo' />
          </Link>
          <Link to='/'>
            <Typography variant='h6' color='white'>
              HOME
            </Typography>
          </Link>
          <Link to='/contactos'>
            <Typography variant='h6' color='white'>
              CONTACTO
            </Typography>
          </Link>
        </section>
        <ul className='social-media'>
          {socialMedia.map(({ image, description, link }, index) => (
            <li key={index} className='social-media-item'>
              <a href={link} target='_blank' rel='noreferrer'>
                <img src={image} alt={description} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </CustomFooter>
  )
}

export default Footer
