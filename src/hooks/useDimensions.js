import { useEffect, useState } from 'react'

const getDimensions = () => {
  const { clientWidth: width, clientHeight: height } = document.documentElement

  return { width, height }
}

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState(getDimensions())

  useEffect(() => {
    const listener = () => setDimensions(getDimensions())

    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  }, [])

  return dimensions
}
