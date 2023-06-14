import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../../styles/breakpoints'
import { Text } from '../Text'
import { Spinner } from '../Spinner'
import { useTranslation } from 'react-i18next'

export const Button = ({
  isDefaultShadow = false,
  type,
  variant = 'primary',
  fullWidth,
  title,
  onClick,
  leftIcon,
  rightIcon,
  disabled,
  style,
  buttonTextProps,
  isLoading = false,
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper
      style={style}
      disabled={disabled}
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
        {isLoading ? t('Loading') : title}
      </Text>
      {isLoading ? <Spinner /> : rightIcon}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  ${({ theme: { colors, shadows }, disabled, isDefaultShadow, variant, fullWidth }) => css`
    width: ${fullWidth ? '100%' : 'auto'};
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

    ${disabled
      ? css`
          opacity: 0.75;
        `
      : css`
          cursor: pointer;

          &:hover,
          &:focus {
            background-color: ${variant === 'primary'
              ? colors.primaryButtonHover
              : colors.secondaryButtonHover};
            box-shadow: ${variant === 'primary'
              ? shadows.buttonShadow
              : shadows.secondButtonShadow};
          }

          &:active {
            background-color: ${variant === 'primary'
              ? colors.primaryButtonActive
              : colors.secondaryButtonActive};
          }
        `}

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
