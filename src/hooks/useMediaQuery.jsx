import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types'

const useGetScreenSize = () => {
  const isMobile = useMediaQuery({ maxWidth: '576px' })
  const isTablet = useMediaQuery({ maxWidth: '768PX' })
  const smallScreen = useMediaQuery({ maxWidth: '992px' })

  return { isMobile, isTablet, smallScreen }
}

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

Mobile.propTypes = {
  children: PropTypes.any,
}

Default.propTypes = {
  children: PropTypes.any,
}

Desktop.propTypes = {
  children: PropTypes.any,
}

export { useGetScreenSize, Mobile, Desktop, Default }
