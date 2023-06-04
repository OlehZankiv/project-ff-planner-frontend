import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import gooseimg from '../../assets/images/goose_2.png'
import ImageCalendar1 from '../../assets/images/calendarDark.jpg'
import ImageCalendar2 from '../../assets/images/calendarLight.jpg'
import ImageCalendar3 from '../../assets/images/calendarMain.jpg'
import ImageNavigationDark from '../../assets/images/navigationDark.jpg'
import ImageNavigationLite from '../../assets/images/navigationLight.jpg'
import ImageDay from '../../assets/images/day.jpg'

const MainPage = () => {
    const { t } = useTranslation();
  return (
    <Container>
      <Hero>
        <LogoImg src={`${gooseimg}`} />
        <Title>
          G<span style={{ fontStyle: 'italic', marginRight: '7px' }}>oo</span>
          seTrack
        </Title>
        <LinkBox>
          <LoginLink to='/login'>
            <LoginTxt>Log in</LoginTxt>
            {/* <Icon name="loginIcon" size="13.5px" /> */}
          </LoginLink>
          <SignupLink to='/register'>Sign up</SignupLink>
        </LinkBox>
      </Hero>

      <ContentList>
        <ContentItem>
          <ContentBox>
            <Number>1.</Number>
            <Category>Calendar</Category>
            <SubTitle>View</SubTitle>
            <Txt>
              {t('Calendar view')}
            </Txt>
          </ContentBox>
          <ImageBox>
            <ImageEllipse className='calendar' />
            <Images className='calendarOne' src={ImageCalendar1} alt='calendar lite' />
            <Images className='calendarTwo' src={ImageCalendar2} alt='calendar dark' />
            <Images className='calendarThree' src={ImageCalendar3} alt='calendar small' />
          </ImageBox>
        </ContentItem>
        <ContentItem>
          <ContentBox>
            <Number>2.</Number>
            <SubTitle>Sidebar</SubTitle>
            <Txt>
              {t('Sidebar view')}
            </Txt>
          </ContentBox>
          <ImageBox>
            <ImageEllipse className='sidebar' />
            <Images className='navigationdark' src={ImageNavigationDark} alt='navigation dark' />
            <Images className='navigationlite' src={ImageNavigationLite} alt='navigation lite' />
          </ImageBox>
        </ContentItem>
        <ContentItem>
          <ContentBox>
            <Number>3.</Number>
            <Category>All in</Category>
            <SubTitle>One</SubTitle>
            <Txt>
              {t('All in view')}
            </Txt>
          </ContentBox>
          <ImageBox>
            <ImageEllipse className='day' />
            <Images className='day' src={ImageDay} alt='chosed day' />
          </ImageBox>
        </ContentItem>
      </ContentList>
    </Container>
  )
}

export default MainPage

const Container = styled.div(() => ({
  margin: '0 auto',
  backgroundColor: '#ffffff',
  maxWidth: '1600px',
}))


const Hero = styled.div(() => ({
  textAlign: 'center',
  minHeight: '812px',
  padding: '232px 0 88px',
  backgroundColor: '#3e85f3',
  color: '#ffffff',
//   @media (min-width'768px, 1440px'): {
//     minHeight: '1024px',
//     padding: '320px 0',
//   },
//   @media ('1440px'): {
//     minHeight: '770px',
//     padding: '187px 0',
//   },
}))

const LogoImg = styled.img(() => ({
  margin: '0 auto',
  width: '142px',
  height: '142px',
//   [theme.media.up('768px')]: {
//     width: '150px',
//     height: '149px',
//   },
}))

const Title = styled.h1(() => ({
  marginBottom: '32px',
  fontFamily: 'Coolvetica',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '40px',
  lineHeight: '48px',
  textShadow: `0px 47px 355px rgba(0, 0, 0, 0.07),
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)`,
//   [theme.media.up('768px')]: {
//     marginBottom: '40px',
//     fontSize: '120px',
//     lineHeight: '150px',
//   },
}))

export const LinkBox = styled.div(() => ({
//   [theme.media.up('768px')]: {
//     display: 'flex',
//     flexDirection: 'row-reverse',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
}))
export const LoginLink = styled(NavLink)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto 208px',
  width: '131px',
  padding: '14px 32px',
  borderRadius: '16px',
  boxShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
  backgroundColor: '#FFFFFF',
  color: '#ffffff',
  transition: 'all 0.2s linear',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(136, 165, 191, 0.78)',
  },
  '&:hover': {
    backgroundColor: '#DCEBF7',
    color: '#ffffff',
  },
  '&:active': {
    backgroundColor: '#DCEBF7',
    color: '#ffffff',
    boxShadow: '0 0 0 2px rgba(136, 165, 191, 0.78)',
  },
//   [theme.media.up('768px')]: {
//     margin: '0',
//     marginLeft: '24px',
//   },
}))

export const LoginTxt = styled.span(() => ({
  marginRight: '6px',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '18px',
  letterSpacing: '-0.02em',
}))

export const SignupLink = styled(NavLink)(() => ({
  fontWeight: '600',
  fontSize: '12px',
  lineHeight: '14px',
  textDecorationLine: 'underline',
  textShadow: `0px 47px 355px rgba(0, 0, 0, 0.07),
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)`,
  color: '#ffffff',
  transition: 'all 0.25s ease-in-out',
  '&:hover': {
    color: '#7aaff3',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: '0px 0px 8px #7aaff3',
  },
  '&:active': {
    color: '#3e85f3',
  },
//   [theme.media.up('768px')]: {
//     fontSize: '14px',
//     lineHeight: '18px',
//   },
}))

export const ContentList = styled.ul(() => ({
  padding: '64px 20px',
//   [theme.media.up('768px')]: {
//     padding: '64px 32px',
//   },
//   [theme.media.up('1440px')]: {
//     padding: '64px 128px',
//   },
}))

export const ContentItem = styled.li(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '64px',
  '&:last-child': {
    paddingBottom: '0',
  },
  '&:nth-child(2n)': {
    alignItems: 'end',
  },
//   [theme.media.up('1440px')]: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     '&:nth-child(2n)': {
//       flexDirection: 'row-reverse',
//       alignItems: 'center',
//     },
//   },
}))

export const ContentBox = styled.div(() => ({
  maxWidth: '275px',
//   [theme.media.up('1440px')]: {
//     margin: '0 77px',
//   },
}))

export const Number = styled.p(() => ({
  marginBottom: '14px',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '80px',
  lineHeight: '100%',
  letterSpacing: '-4px',
  color: '#ffffff',
//   [theme.media.up('768px')]: {
//     fontSize: '104px',
//   },
}))

export const Category = styled.h2(() => ({
  display: 'inline-block',
  padding: '8px 18px',
  marginBottom: '8px',
  color: '#ffffff',
  background: '#dcebf7',
  borderRadius: '44px',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '40px',
  textTransform: 'uppercase',
//   [theme.media.up('768px')]: {
//     padding: '6px 18px',
//     fontSize: '40px',
//     lineHeight: '44px',
//   },
}))

export const SubTitle = styled.h2(() => ({
  marginBottom: '14px',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '40px',
  textTransform: 'uppercase',
//   [theme.media.up('768px')]: {
//     marginBottom: '24px',
//     fontSize: '40px',
//     lineHeight: '44px',
//   },
}))

export const Txt = styled.p(() => ({
  paddingBottom: '40px',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '18px',
  color: 'rgba(17, 17, 17, 0.9)',
//   [theme.media.up('768px')]: {
//     paddingBottom: '48px',
//   },
//   [theme.media.up('1440px')]: {
//     paddingBottom: '0',
//   },
}))

export const ImageBox = styled.div(() => ({
  position: 'relative',
  width: '100%',
  height: '457px',
  overflow: 'hidden',
  background: '#3e85f3',
  borderRadius: '40px',
//   [theme.media.up('768px')]: {
//     height: '700px',
//     borderRadius: '100px',
//   },
//   [theme.media.up('1440px')]: {
//     width: '50%',
//   },
}))

export const Images = styled.img(() => ({
  position: 'absolute',
  borderRadius: '8px',
  '&.calendarOne': {
    width: '251.75px',
    height: '196.76px',
    left: '34px',
    top: '100px',
    boxShadow: '-17px 36px 45px rgba(0, 0, 0, 0.2)',
    transform: 'rotate(-28deg)',
  },
//   [theme.media.up('768px')]: {
//     width: '457.33px',
//     height: '357.44px',
//     left: '80px',
//     top: '160px',
//   },
  '&.calendarTwo': {
    width: '254px',
    height: '199px',
    left: '204px',
    top: '100px',
    boxShadow: `0px 27.8704px 43.9236px rgba(0, 0, 0, 0.197407),
            0px 16.563px 23.8889px rgba(0, 0, 0, 0.157926),
            0px 8.6px 12.1875px rgba(0, 0, 0, 0.13),
            0px 3.5037px 6.11111px rgba(0, 0, 0, 0.102074),
            0px 43px 75px rgba(0, 0, 0, 0.26),
            0px 0.796296px 2.95139px rgba(0, 0, 0, 0.0625926)`,
    transform: 'rotate(-28deg)',
  },
//   [theme.media.up('768px')]: {
//     width: '463.21px',
//     height: '362.34px',
//     left: '380px',
//     top: '160px',
//   },
  '&.calendarThree': {
    width: '105.12px',
    height: '99.73px',
    left: '130px',
    top: '270px',
    boxShadow: `0px 3.5037px 6.11111px rgba(0, 0, 0, 0.102074),
            0px 43px 75px rgba(0, 0, 0, 0.26),
            0px 0.796296px 2.95139px rgba(0, 0, 0, 0.0625926)`,
    transform: 'rotate(-28deg)',
    // [theme.media.up('768px')]: {
    //   width: '190.96px',
    //   height: '181.17px',
    //   left: '255px',
    //   top: '485px',
    // },
  },
  '&.navigationdark': {
    width: '111.24px',
    height: '347.61px',
    left: '-9px',
    top: '130px',
    boxShadow: '-17px 36px 45px rgba(0, 0, 0, 0.2)',
    transform: 'rotate(28deg)',
    // [theme.media.up('768px')]: {
    //   width: '199px',
    //   height: '626px',
    //   left: '80px',
    //   top: '122px',
    // },
    // [theme.media.up('1440px')]: {
    //   width: '191px',
    //   height: '599px',
    //   left: '20px',
    //   top: '150px',
    // },
  },
  '&.navigationlite': {
    width: '111.24px',
    height: '347.61px',
    left: '130px',
    top: '130px',
    boxShadow: '-17px 36px 45px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    transform: 'rotate(28deg)',
    // [theme.media.up('768px')]: {
    //   width: '199px',
    //   height: '626px',
    //   left: '330px',
    //   top: '122px',
    // },
    // [theme.media.up('1440px')]: {
    //   width: '191px',
    //   height: '599px',
    //   left: '260px',
    //   top: '150px',
    // },
  },
  '&.day': {
    width: '518px',
    height: '332px',
    left: '59px',
    top: '102px',
    padding: '11px',
    borderRadius: '8px',
    border: '1.5px solid rgba(62, 133, 243, 0.4)',
    // [theme.media.up('768px')]: {
    //   width: '704px',
    //   height: '568px',
    //   left: '84px',
    //   top: '84px',
    //   padding: '18px',
    // },
  },
}))

export const ImageEllipse = styled.div(() => ({
  position: 'absolute',
  width: '256px',
  height: '256px',
  borderRadius: '50%',
  backgroundImage: `radial-gradient(
        circle at center,
        rgba(62, 133, 243, 0) 40%,
        rgba(62, 133, 243, 0.1) 40%
    )`,
//   [theme.media.up('768px')]: {
//     width: '617px',
//     height: '617px',
//   },
  '&.calendar': {
    left: '190px',
    top: '330px',
    // [theme.media.up('768px')]: {
    //   left: '300px',
    //   top: '515px',
    // },
  },
  '&.sidebar': {
    left: ' -115px',
    top: '-100px',
    // [theme.media.up('768px')]: {
    //   left: '-330px',
    //   top: '-350px,',
    // },
  },
  '&.day': {
    display: 'none',
  },
}))
