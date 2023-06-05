import { NavLink } from 'react-router-dom'
import styled, {css} from 'styled-components'
import { getDesktopStyles, getTabletStyles } from '../../styles/breakpoints'

export const NavigateButtonStyled = styled(NavLink)`
  ${({ theme: { colors } }) =>
    css`
      color: ${colors.primaryColor};
      position: absolute;
      bottom: -34px;
      left: 50%;
      transform: translate(-50%);

      font-weight: 600;
      font-size: 12px;
      line-height: 14px;

      &: hover {
        color: ${colors.hoverPrimaryColor};
      }

      ${getTabletStyles(css`
        bottom: -48px;
        font-size: 18px;
        line-height: 24px;
      `)}

      ${getDesktopStyles(css`
        bottom: -48px;
        font-size: 18px;
        line-height: 24px;
      `)}
    `}
`
