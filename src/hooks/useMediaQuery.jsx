import { useMediaQuery } from 'react-responsive'

const useGetScreenSize = () => {
  const isMobile = useMediaQuery({ maxWidth: '576px' })
  const isTablet = useMediaQuery({ maxWidth: '768PX' })
  const smallScreen = useMediaQuery({ maxWidth: '992px' })

  return { isMobile, isTablet, smallScreen }
}

export default useGetScreenSize
