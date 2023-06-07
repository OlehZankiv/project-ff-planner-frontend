import styled, { css, useTheme } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../navigation/routes'

import { GooseLogo, GooseLogoText, imageFirst, imageSecond, imageThird } from '../../assets/images'
import { LoginIcon } from '../../assets/icons/LogInIcon';
import { getBreakpointsStyles } from '../../styles/breakpoints';
import { Button } from '../../components/buttons/Button';


const Landing = () => {
  const { t } = useTranslation();
  const {colors} = useTheme();
  return (
    <Container>
      <Hero>
        <LogoWrap>
        <LogoImg src={GooseLogo} />
        <LogoTextImg
          src={GooseLogoText}
          />
          </LogoWrap>
        <LinkBox>          
          <Button type='primary' onClick={() => {ROUTES.LOGIN}} rightIcon={<LoginIcon color={colors.primary} />} title={t('Log in')}  />
          <SignupLink to='/register'>{t('Sign Up')}</SignupLink>
        </LinkBox>
      </Hero>

      <ContentList>
        <ContentItem>
          <ContentBox>
            <Number>1.</Number>
            <Category>{t('Calendar')}</Category>
            <SubTitle>{t('View')}</SubTitle>
            <Text>
              {t("GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.")}
            </Text>
          </ContentBox>
          <ImageBox>
            <Img src={imageFirst} alt='calendar view' />
          </ImageBox>
        </ContentItem>
        <ContentItem>
          <ContentBox>
            <Number>2.</Number>
            <SubTitle>{t('Sidebar')}</SubTitle>
            <Text>
              {t("GooseTrack offers easy access to your account settings, calendar, and filters. The My Account section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.")}
            </Text>
          </ContentBox>
          <ImageBox>
            <Img src={imageSecond} alt='sidebars' />
          </ImageBox>
        </ContentItem>
        <ContentItem>
          <ContentBox>
            <Number>3.</Number>
            <Category>{t('All in')}</Category>
            <SubTitle>{t('One')}</SubTitle>
            <Text>
              {t("GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.")}
            </Text>
          </ContentBox>
          <ImageBox>
            <Img src={imageThird} alt='days' />
          </ImageBox>
        </ContentItem>
      </ContentList>
    </Container>
  )
}

export default Landing



const Container = styled.div`
${({theme}) => css`
margin: 0 auto;
background-color: ${theme.colors.background};
max-width: 1600px;
`}`


const Hero = styled.div`
${({ theme }) => css`
text-align: center;
  min-height: 812px;
  padding: 232px 0 88px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.content};`}
  
  
    ${getBreakpointsStyles({
        tablet: css`
    min-height: 1024px;
    padding: 320px 0;`,
        desktop: css`
        min-height: 770px;
        padding: 187px 0,
        `})
    })
`

const LogoWrap = styled.div`
display: flex;
flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LogoImg = styled.img`
    margin: 0 auto;
    width: 142px;
  height: 142px;
${getBreakpointsStyles({
    tablet: css`
        width: 150px;
        height: 149px;` })}
`

const LogoTextImg = styled.img`
margin: 0 auto;
    margin-bottom: 32px;
    

    ${getBreakpointsStyles({
            tablet: css`
    margin-bottom: 40px;
    `})}`


export const LinkBox = styled.div`
 display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 208px;

  ${getBreakpointsStyles({
      desktop: css`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 24px;
    `})
  },
`

export const SignupLink = styled(NavLink)`
${({ theme }) => css`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  color: ${theme.colors.content};
  transition: all 0.25s ease-in-out;
  
  &:hover {
    color: ${theme.colors.linkHover};
    cursor: pointer;
    text-decoration: none;
  };

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px ${theme.colors.linkHover};
  };

  &:active {
    color: ${theme.colors.primary};
  };`}

 ${getBreakpointsStyles({
      tablet: css`
    font-size: 14px;
    line-height: 18px;`
  })},
`

export const ContentList = styled.ul`
    padding: 64px 20px;
  ${getBreakpointsStyles({
      tablet: css`
    padding: 64px 32px;`,
      
  desktop: css`
    padding: 64px 128px;`
  })}

`

export const ContentItem = styled.li`
    display: flex;
    flex-direction: column;
    padding-bottom: 64px;

  &:last-child {
    padding-bottom: 0;
  };

  &:nth-child(2n) {
    align-items: end;
  };

  ${getBreakpointsStyles({
      desktop: css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:nth-child(2n) {
      flex-direction: row-reverse;
      align-items: center;`
    })}
`

export const ContentBox = styled.div`
  max-width: 275px;

   ${getBreakpointsStyles({
      desktop: css`
    margin: 0 77px;`
  })}
`

export const Number = styled.p`
${({ theme }) => css`
  margin-bottom: 14px;
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: -4px;
  color: ${theme.colors.primary};`}
  ${getBreakpointsStyles({
      tablet: css`
    font-size: 104px;`
  })}
`

export const Category = styled.h2`
${({ theme }) => css`
  display: inline-block;
  padding: 8px 18px;
  margin-bottom: 8px;
  color: ${theme.colors.primary};
  background: #dcebf7;
  border-radius: 44px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;`}
  ${getBreakpointsStyles({
      tablet: css`
    padding: 6px 18px;
    font-size: 40px;
    line-height: 44px;`
  })}
`

export const SubTitle = styled.h2`
  margin-bottom: 14px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
    ${getBreakpointsStyles({
      tablet: css`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 44px;`
  })}
`

export const Text = styled.p`
  padding-bottom: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(17, 17, 17, 0.9);

  ${getBreakpointsStyles({
      tablet: css`
    padding-bottom: 48px;`,
  
      desktop: css`
    padding-bottom: 0;`
  })}
`

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 457px;
  overflow: hidden;
  background: #E3F3FF;
  border-radius: 100px;
  ${getBreakpointsStyles({
      tablet: css`
    height: 700px;
    border-radius: 100px;`,
    desktop: css`
 height: 700px;
    width: 50%;`
  })}
`

export const Img = styled.img`
width: 100%;
height: 100%;
`