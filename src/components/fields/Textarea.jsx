import styled from 'styled-components'
import { Text } from '../Text'

export const Textarea = ({ label, placeholder, onChange }) => {
//   const { colors } = useTheme()
// ToDo: replace colors with theme colors #343434 / #FAFAFA


  
  return (
    <>
      <Label htmlFor='textarea'><Text type='p' fontSize={12} lineHeight={14} color='#343434'>{label}</Text></Label>
      <Wrapper type='text' id='textarea' placeholder={placeholder} onChange={onChange} />
    </>
  )
}

const Wrapper = styled.textarea`
  height: 127px;
  background-color: #f6f6f6;
  border-radius: 8px;
  border: 0px;
  padding: 14px 18px;
  margin-bottom: 18px;
  resize: none;
`
const Label = styled.label`
  margin-bottom: 8px;
`
