import { useEffect, useState } from 'react'

const useGetWindowResize = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTabletAndAbove, setIsTabletAndAbove] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const tabletAbove = () => {
    if (window.innerWidth > 576) {
      setIsTabletAndAbove(true)
    } else {
      setIsTabletAndAbove(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('resize', tabletAbove)
  })

  return { isMobile, isTabletAndAbove }
}

export default useGetWindowResize
