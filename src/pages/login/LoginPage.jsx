// TODO: Implement Login Page

import styled, { css } from 'styled-components'
import {
  getBreakpointsStyles,
  getDesktopStyles,
  getTabletStyles,
  useBreakpointValue,
} from '../../styles/breakpoints'

const LoginPage = ({}) => {
  const value = useBreakpointValue({
    desktopValue: 'Welcome to Desktop',
    tabletValue: 'Welcome to Tablet',
    mobileValue: 'Welcome to Mobile',
  })

  console.log(value)

  return <Wrapper>{value}</Wrapper>
}

export default LoginPage

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  color: white;

  ${getBreakpointsStyles({
    desktop: css`
      background-color: blue;
    `,
    tablet: css`
      background-color: green;
    `,
  })}

  // The same as getBreakpointsStyles
  ${getDesktopStyles(css`
    background-color: blue;
  `)}
  ${getTabletStyles(css`
    background-color: green;
  `)}
`
