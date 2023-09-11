import styled, { css, useTheme } from 'styled-components'
import { Field, useField } from 'formik'
import { Text } from '../Text'
import { useEffect, useState } from 'react'
import { ErrorIcon, SuccessIcon } from '../../assets/icons'
import { getMobileStyles } from '../../styles/breakpoints'
import PhoneInput from 'react-phone-number-input'

export const Input = ({
  readonly,
  name,
  type,
  value,
  placeholder,
  title,
  errorMessage,
  successMessage,
  rightIcon,
  isError,
  style,
  resetState,
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

  useEffect(() => {
    if (resetState) setWasError(false)
  }, [resetState])

  const [{ onBlur: onFormBlur }, { value: formValue }, { setValue: setFormValue }] = useField(name)

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
        {type === 'phone' ? (
          <PhoneInput
            defaultCountry='UA'
            placeholder={placeholder}
            countrySelectComponent={() => null}
            value={formValue}
            onChange={setFormValue}
            id={name}
            onBlur={onFormBlur}
            numberInputProps={{ style: { borderColor: inputBorderColor } }}
            inputComponent={SimpleInput}
          />
        ) : (
          <InputStyled
            readOnly={readonly}
            style={{ borderColor: inputBorderColor }}
            type={type}
            name={name}
            placeholder={placeholder}
            {...(value !== undefined && { value })}
          />
        )}
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

const inputStyles = css`
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
      font-size: 16px;
      line-height: 18px;
      color: ${colors.placeholderColor};
    }
  `}
`

export const InputStyled = styled(Field)`
  ${inputStyles}
`

export const SimpleInput = styled.input`
  ${inputStyles}
`
