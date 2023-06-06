import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../../styles/breakpoints'
import { Text } from '../Text'

export const Button = ({
  isDefaultShadow = false,
  type = 'primary',
  fullWidth,
  title,
  onClick,
  rightIcon,
}) => (
  <Wrapper onClick={onClick} isDefaultShadow={isDefaultShadow} fullWidth={fullWidth} type={type}>
    <Text
      type='h4'
      lineHeight={24}
      fontSize={18}
      color={type === 'primary' ? 'white' : 'secondaryButtonText'}
    >
      {title}
    </Text>
    {rightIcon}
  </Wrapper>
)

const Wrapper = styled.button`
  ${({ theme: { colors, shadows }, isDefaultShadow, fullWidth, type }) => css`
    width: ${fullWidth ? '100%' : 'auto'};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${type === 'primary' ? colors.primary : colors.secondary};
    box-shadow: ${isDefaultShadow
      ? type === 'primary'
        ? shadows.buttonShadow
        : shadows.secondButtonShadow
      : 'unset'};
    border-radius: 16px;
    border: none;
    padding: 14px 22px;
    column-gap: 6px;
    color: ${colors.white};
    transition: background-color 0.2s;

    &:hover,
    &:focus {
      background-color: ${type === 'primary'
        ? colors.primaryButtonHover
        : colors.secondaryButtonHover};
      box-shadow: ${type === 'primary' ? shadows.buttonShadow : shadows.secondButtonShadow};
    }

    &:active {
      background-color: ${type === 'primary'
        ? colors.primaryButtonActive
        : colors.secondaryButtonActive};
    }

    ${getBreakpointsStyles({
      tablet: css`
        padding: 16px 22px;
      `,
      desktop: css`
        padding: 16px 22px;
      `,
    })}
  `}
`
