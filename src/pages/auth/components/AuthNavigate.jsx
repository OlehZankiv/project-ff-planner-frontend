import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { OpacityButton, Text } from '../../../components'
import { getMobileStyles } from '../../../styles/breakpoints'

export const AuthNavigate = ({ text, route }) => (
  <OpacityButton>
    <NavigateButtonStyled to={route}>
      <Text
        type='h5'
        fontWeight='600'
        mobileStyles={css`
          font-size: 12px;
          line-height: 14px;
        `}
        fontSize={18}
        lineHeight={24}
        color='primary'
      >
        {text}
      </Text>
    </NavigateButtonStyled>
  </OpacityButton>
)

const NavigateButtonStyled = styled(NavLink)`
  ${({ theme: { colors } }) =>
    css`
      color: ${colors.primary};
      position: absolute;
      bottom: -24px;
      left: 50%;
      transform: translate(-50%, 100%);
      ${getMobileStyles(css`
        bottom: -18px;
      `)}
    `}
`
