import styled, { css } from 'styled-components'
import { Text } from '../Text'
import { getMobileStyles } from '../../styles/breakpoints'
import { useField } from 'formik'

export const Textarea = ({ name, errorMessage, isError, style, label, placeholder }) => {
  const [handlers, { value }] = useField(name)

  const inputColor = isError ? 'error' : 'transparent'
  const labelColor = isError ? 'error' : 'feedbackModalLabels'

  return (
    <Wrapper style={style}>
      <label htmlFor='textarea'>
        <Text type='p' fontSize={12} lineHeight={14} color={labelColor}>
          {label}
        </Text>
      </label>
      <InputArea
        {...handlers}
        type='text'
        id='textarea'
        placeholder={placeholder}
        value={value}
        isError={isError}
      />

      {isError && !!errorMessage && (
        <HintMessageWrapper>
          <Text type='p' color={inputColor} fontWeight={400} fontSize={14} lineHeight={18}>
            {errorMessage}
          </Text>
        </HintMessageWrapper>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const InputArea = styled.textarea`
  ${({ theme: { colors }, isError }) => css`
    background-color: ${colors.modalsInputBackground};
    border: 1px solid ${isError ? colors.error : colors.modalsInputBorder};
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

const HintMessageWrapper = styled.div`
  position: absolute;
  transform: translateY(100%);
  bottom: 2px;
  left: 18px;
`
