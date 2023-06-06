import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../../../../styles/breakpoints'

export const AuthNavigate = ({ text, route }) => {
  return <NavigateButtonStyled to={route}>{text}</NavigateButtonStyled>
}

const NavigateButtonStyled = styled(NavLink)`
  ${({ theme: { colors } }) =>
    css`
      color: ${colors.primary};
      position: absolute;
      bottom: -34px;
      left: 50%;
      transform: translate(-50%);

      font-weight: 600;
      font-size: 12px;
      line-height: 14px;

      &: hover {
        color: ${colors.hoverPrimary};
      }

      ${getBreakpointsStyles({
        desktop: css`
          bottom: -48px;
          font-size: 18px;
          line-height: 24px;
        `,
        tablet: css`
          bottom: -48px;
          font-size: 18px;
          line-height: 24px;
        `,
      })}
    `}
`