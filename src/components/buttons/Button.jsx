import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../../styles/breakpoints'
import { Text } from '../Text'

export const Button = ({
  isDefaultShadow = false,
  type,
  variant = 'primary',
  fullWidth,
  title,
  onClick,
  leftIcon,
  rightIcon,
  style,
  buttonTextProps,
}) => (
  <Wrapper
    style={style}
    onClick={onClick}
    isDefaultShadow={isDefaultShadow}
    fullWidth={fullWidth}
    variant={variant}
    type={type}
  >
    {leftIcon}
    <Text
      {...buttonTextProps}
      type='h4'
      mobileStyles={css`
        font-size: 14px;
        line-height: 18px;
      `}
      color={variant === 'primary' ? 'white' : 'secondaryButtonText'}
    >
      {title}
    </Text>
    {rightIcon}
  </Wrapper>
)

const Wrapper = styled.button`
  ${({ theme: { colors, shadows }, isDefaultShadow, variant, fullWidth }) => css`
    width: ${fullWidth ? '100%' : 'auto'};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${variant === 'primary' ? colors.primary : colors.secondary};
    box-shadow: ${isDefaultShadow
      ? variant === 'primary'
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
      background-color: ${variant === 'primary'
        ? colors.primaryButtonHover
        : colors.secondaryButtonHover};
      box-shadow: ${variant === 'primary' ? shadows.buttonShadow : shadows.secondButtonShadow};
    }

    &:active {
      background-color: ${variant === 'primary'
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
