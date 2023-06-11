import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'

export const RadioButton = ({ title, checked, onChange }) => {
  const { t } = useTranslation();
  let radioColor = '';
  let priority=title.charAt(0).toUpperCase() + title.slice(1);

  switch (title) {
    case 'low':
      radioColor = '114, 194, 248'
      break
    case 'medium':
      radioColor = '243,178,73'
      break
    case 'high':
      radioColor = '234,61,101'
      break
    default: radioColor='114, 194, 248'
      break
  }
  
  return (
    <RadioLabel htmlFor={title}>
      <RadioInput
        type='radio'
        value={title}
        id={title}
        checked={checked === title}
        onChange={onChange}
        radioColor={radioColor}
      />
      <span>{t(priority)}</span>
    </RadioLabel>
  )
}


const RadioInput = styled.input`
 ${({ theme: { colors } }) => css`
  position: absolute;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: rgb(${props=>props.radioColor});
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
    box-shadow: 0 0 0 1.3px rgba(${props=>props.radioColor}, 0.5);
  }`}
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
    & span {
      padding-left: 17px;
    }
  `}
`