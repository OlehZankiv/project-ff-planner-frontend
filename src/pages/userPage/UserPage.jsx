import {
  UserWrapper,
  ImageAvatar,
  ImageWrapper,
  NameText,
  UserText,
  InputLabel,
  UserForm,
  DivForm,
  InputWrapper,
  Input,
  UserButton,
} from './UserPage.styled'
// import { useBreakpointValue } from '../../styles/breakpoints'
import styled from 'styled-components'
import { AddIcon } from '../../assets/icons/AddIcon'
const UserPage = ({}) => {
  // const UserName = useBreakpointValue(userNameStyles)
  const currentDate = new Date().toISOString().slice(0, 10)

  return (
    <Wrapper>
      <UserWrapper>
        <ImageWrapper>
          <ImageAvatar src='https://img.spacergif.org/v1/spacer.gif'></ImageAvatar>
          <AddIcon></AddIcon>
        </ImageWrapper>
        <NameText>Fine Goose</NameText>
        <UserText>User</UserText>
        <UserForm>
          <DivForm>
            <InputWrapper>
              <InputLabel>User Name</InputLabel>
              <Input type='text' name='username' required id='username'></Input>
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Birthday</InputLabel>
              <Input
                type='date'
                id='start'
                name='userbirthday'
                value={currentDate}
                pattern='\d{4}-\d{2}-\d{2}'
              ></Input>
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Email</InputLabel>
              <Input type='email' name='usermail' required></Input>
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Phone</InputLabel>
              <Input
                type='tel'
                name='usertel'
                title='+380 (96) 111-11-11'
                required
                minlength='3'
              ></Input>
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Skype</InputLabel>
              <Input type='text' name='userskype'></Input>
            </InputWrapper>
          </DivForm>
          <UserButton type='submit'>Save Changes</UserButton>
        </UserForm>
      </UserWrapper>
    </Wrapper>
  )
}

export default UserPage

// const userNameStyles = {
//   desktopValue: styled.h1`
//     background-color: greenyellow;
//   `,
//   tabletValue: styled.p`
//     background-color: #7b3816;
//   `,
//   mobileValue: styled.div`
//     background-color: #1a2250;
//   `,
// }

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: greenyellow;
`
