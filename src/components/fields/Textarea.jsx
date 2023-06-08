import styled, { css } from 'styled-components'
import { Text } from '../Text'
import { getMobileStyles } from '../../styles/breakpoints'

export const Textarea = ({ value, style, label, placeholder, onChange }) => (
  <Wrapper style={style}>
    <label htmlFor='textarea'>
      <Text type='p' fontSize={12} lineHeight={14} color='feedbackModalLabels'>
        {label}
      </Text>
    </label>
    <InputArea
      type='text'
      id='textarea'
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </Wrapper>
)

const Wrapper = styled.div``

const InputArea = styled.textarea`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.modalsInputBackground};
    border: 1px solid ${colors.modalsInputBorder};
    min-height: 128px;
    max-height: 164px;
    border-radius: 8px;
    width: 100%;
    padding: 14px 18px;
    margin-top: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    resize: none;
    outline: none;

    color: ${colors.text};
    ${getMobileStyles(css`
      font-size: 14px;
    `)}

    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
    }
  `}
`
