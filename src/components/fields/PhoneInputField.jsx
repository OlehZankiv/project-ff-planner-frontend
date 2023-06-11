import styled, { css, useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'

import { Text } from '../Text'
import { ErrorIcon, SuccessIcon } from '../../assets/icons'
import { getBreakpointsStyles, getMobileStyles } from '../../styles/breakpoints'

export const PhoneInputField = ({
  readonly,
  name,
  value,
  placeholder,
  title,
  errorMessage,
  successMessage,
  rightIcon,
  isError,
  style,
  onChange,
}) => {
  const { colors } = useTheme()

  const [wasError, setWasError] = useState(false)
  useEffect(() => setWasError((prev) => (prev ? true : isError)), [isError])

  const getInputStageValue = (defaultValue, errorValue, successValue) => {
    if (isError) return errorValue
    else if (wasError) return successValue

    return defaultValue
  }

  const inputColor = getInputStageValue('inputLabel', 'error', 'success')
  const inputBorderColor = getInputStageValue(
    colors.inputBorderDefault,
    colors.error,
    colors.success,
  )
  const hintMessage = getInputStageValue(null, errorMessage, successMessage)
  const inputIcon =
    rightIcon ??
    getInputStageValue(
      null,
      <ErrorIcon color={colors[inputColor]} />,
      <SuccessIcon color={colors[inputColor]} />,
    )

  return (
    <Wrapper style={style}>
      {!!title && (
        <Text
          type='h4'
          color={inputColor}
          mobileStyles={css`
            font-size: 12px;
          `}
        >
          {title}
        </Text>
      )}

      <InputWrapper>
        <PhoneInputStyled
          readOnly={readonly}
          {...(value !== undefined && { value })}
          style={{ borderColor: inputBorderColor }}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          country='UA'
          international
          withCountryCallingCode
        />
        {inputIcon && <InputIconWrapper>{inputIcon}</InputIconWrapper>}
        {!!hintMessage && (
          <HintMessageWrapper>
            <Text type='p' color={inputColor} fontWeight={400} fontSize={14} lineHeight={18}>
              {hintMessage}
            </Text>
          </HintMessageWrapper>
        )}
      </InputWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  row-gap: 8px;
  margin-bottom: 24px;
`

const InputWrapper = styled.div`
  position: relative;
`

const HintMessageWrapper = styled.div`
  position: absolute;
  transform: translateY(100%);
  bottom: -4px;
  left: 18px;
`

const InputIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`

export const PhoneInputStyled = styled(PhoneInput)`
  ${({ theme: { colors } }) => css`
    width: 100%;
    padding: 18px;
    border-radius: 8px;
    color: ${colors.text};
    border-width: 1px;
    border-style: solid;
    background-color: transparent;

    font-weight: 600;

    font-size: 16px;
    line-height: 18px;
    ${getMobileStyles(css`
      font-size: 14px;
    `)}

    &:focus {
      outline: none;
      border-color: ${colors.text} !important;
    }

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.29;
      color: ${colors.placeholderColor};
    }

    ${getBreakpointsStyles({
      tablet: css`
        font-size: 16px;
        line-height: 1.13;
      `,
      desktop: css`
        font-size: 16px;
        line-height: 1.13;
      `,
    })}
  `}
`
