/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next'
import styled, { css, useTheme } from 'styled-components'
import { Text } from '../../../../components'

export const RadioButton = ({
  label,
  id,
  value,
  text,
  checked,
  onChange,
  backgroundColor,
  boxShadowColor,
}) => {
  const { t } = useTranslation()
  const { shadows } = useTheme()
  let radioColor = ''
  switch (value) {
    case 'low':
      radioColor = shadows.radioButtonShadowLow
      break
    case 'medium':
      radioColor = shadows.radioButtonShadowMedium
      break
    case 'high':
      radioColor = shadows.radioButtonShadowHigh
      break
    default:
      radioColor = shadows.radioButtonShadowLow
      break
  }

  return (
    <RadioLabel htmlFor={label}>
      <RadioInput
        id={id}
        type='radio'
        value={value}
        checked={checked === id}
        onChange={onChange}
        radioColor={radioColor}
        style={{
          background: backgroundColor,
        }}
      />
      <Text style={{ paddingLeft: '17px' }} type='p'>
        {t(text)}
      </Text>
    </RadioLabel>
  )
}

const RadioInput = styled.input`
  ${({ theme: { colors, shadows } }) => css`
    position: absolute;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 100%;
    border: 1px solid transparent;
    display: flex;
    flex-direction: row;
    height: 10px;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    vertical-align: text-bottom;
    width: 10px;
    :checked {
      height: 14px;
      width: 14px;
      border-color: ${colors.background};
      box-shadow: ${(props) => props.radioColor};
    }
  `}
`
const RadioLabel = styled.label`
  ${({ theme: { colors } }) => css`
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    gap: 5px;
    align-items: center;
    color: ${colors.text};
  `}
`
