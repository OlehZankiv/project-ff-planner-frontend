import styled, { css } from 'styled-components'
import { OpacityButton, Text } from '../index'
import { getOpacityColor } from '../../utils/styles'
import { useField } from 'formik'

export const RadioButtons = ({ items, style, name }) => {
  const [, { value }, { setValue }] = useField(name)

  return (
    <Wrapper style={style}>
      {items.map((item, i) => (
        <RadioButtonItem key={i} onClick={() => setValue(item.value)}>
          <RadioCircle selected={value === item.value} color={item.color} />
          <Text type='p'>{item.label}</Text>
        </RadioButtonItem>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const RadioButtonItem = styled(OpacityButton)`
  display: flex;
  align-items: center;
  column-gap: 4px;
`

const RadioCircle = styled.div`
  ${({ color, selected }) => css`
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${color};

    ${selected &&
    css`
      &:before {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        top: -2px;
        left: -2px;
        box-sizing: content-box;
        border: 1px solid ${getOpacityColor(color, 0.5)};
      }
    `}
  `}
`
