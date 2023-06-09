import { useDimensions } from '../hooks'
import { css } from 'styled-components'

export const sizes = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
}

export const getBreakpointsStyles = ({ desktop = css``, tablet = css``, mobile = css`` }) => css`
  @media (min-width: ${sizes.tablet}px) {
    ${desktop}
  }
  @media (min-width: ${sizes.mobile}px) and (max-width: ${sizes.tablet}px) {
    ${tablet}
  }
  @media (max-width: ${sizes.mobile}px) {
    ${mobile}
  }
`

export const getDesktopStyles = (styles = css``) => getBreakpointsStyles({ desktop: styles })
export const getTabletStyles = (styles = css``) => getBreakpointsStyles({ tablet: styles })
export const getMobileStyles = (styles = css``) => getBreakpointsStyles({ mobile: styles })

export const useBreakpointValue = ({
  desktopValue = null,
  tabletValue = null,
  mobileValue = null,
}) => {
  const { width } = useDimensions()

  if (width <= sizes.mobile) return mobileValue
  else if (width <= sizes.tablet) return tabletValue

  return desktopValue
}

export const ScreenWrapper = ({ desktop = <></>, tablet = <></>, mobile = <></> }) => {
  const { width } = useDimensions()

  if (width <= sizes.mobile) return mobile
  else if (width <= sizes.tablet) return tablet

  return desktop
}
