import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../../styles/breakpoints'

export const Select = ({ style, options, value, onChange, name }) => (
  <SelectWrapper style={style} name={name} value={value} onChange={(e) => onChange(e.target.value)}>
    {options.map((option) => (
      <Option key={option.value} value={option.value}>
        {option.label}
      </Option>
    ))}
  </SelectWrapper>
)

const smallSelectStyles = css`
  padding: 14px 24px 14px 14px;
  font-size: 14px;
  line-height: 16px;

  background-position: calc(100% - 14px) calc(1em + 8px), calc(100% - 9px) calc(1em + 8px), 100% 0;

  &:focus {
    background-position: calc(100% - 9px) 1.5em, calc(100% - 14px) 1.5em, 100% 0;
  }
`

const SelectWrapper = styled.select`
  ${({ theme: { colors } }) => css`
    background-color: transparent;
    width: 100%;
    padding: 18px 28px 18px 18px;
    border-radius: 8px;
    color: ${colors.text};

    border-width: 1px;
    border-style: solid;

    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    -webkit-appearance: none;
    -moz-appearance: none;

    background-image: linear-gradient(45deg, transparent 50%, ${colors.text} 50%),
      linear-gradient(135deg, ${colors.text} 50%, transparent 50%),
      linear-gradient(to right, transparent, transparent);
    background-position: calc(100% - 20px) calc(1em + 8px), calc(100% - 15px) calc(1em + 8px),
      100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;

    &:focus {
      outline: none;

      background-image: linear-gradient(45deg, ${colors.text} 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, ${colors.text} 50%);
      background-position: calc(100% - 15px) 1.5em, calc(100% - 20px) 1.5em, 100% 0;
    }

    ${getBreakpointsStyles({
      tablet: smallSelectStyles,
      mobile: smallSelectStyles,
    })}
  `}
`

const Option = styled.option``
