import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import gooseimg from '../../assets/images/goose_2.png'
import ImageCalendar1 from '../../assets/images/calendarLight.jpg'
import ImageCalendar2 from '../../assets/images/calendarDark.jpg'
import ImageCalendar3 from '../../assets/images/calendarMain.jpg'
import ImageNavigationDark from '../../assets/images/navigationDark.jpg'
import ImageNavigationLite from '../../assets/images/navigationLight.jpg'
import ImageDay from '../../assets/images/day.jpg'
import { LoginIcon } from '../../assets/icons/LogInIcon';
import { getBreakpointsStyles } from '../../styles/breakpoints';


const Landing = () => {
    const { t } = useTranslation();
  return (
    <Container>
      <Hero>
        <LogoImg src={`${gooseimg}`} />
        <Title>
          G<span style={{ fontstyle: 'italic', marginRight: '7px' }}>oo</span>
          seTrack
        </Title>
        <LinkBox>
          <LoginLink to='/login'>
            <LoginTxt>Log in</LoginTxt>
            <LoginIcon name="loginIcon" size="13.5px" stroke='#3e85f3'/>
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

export default Landing

const Container = styled.div`
margin: 0 auto;
background-color: #ffffff;
max-width: 1600px;`


const Hero = styled.div`
  text-align: center;
  min-height: 812px;
  padding: 232px 0 88px;
  background-color: #3e85f3;
  color: #ffffff;
  
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

const LogoImg = styled.img`
    margin: 0 auto;
    width: 142px;
  height: 142px;
${getBreakpointsStyles({
    tablet: css`
        width: 150px;
        height: 149px;` })}
`

const Title = styled.h1`
    margin-bottom: 32px;
    font-family: Coolvetica;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    ${getBreakpointsStyles({
            tablet: css`
    margin-bottom: 40px;
    font-size: 120px;
    line-height: 150px;`})}`

export const LinkBox = styled.div`
  ${getBreakpointsStyles({
      tablet: css`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;`})
  },
`
export const LoginLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 208px;
  width: 131px;
  padding: 14px 32px;
  border-radius: 16px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  background-color: #FFFFFF;
  color: #ffffff;
  transition: all 0.2s linear;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(136, 165, 191, 0.78);
  };

  &:hover {
    background-color: #DCEBF7;
    color: #ffffff;
  };

  &:active {
    background-color: #DCEBF7;
    color: #ffffff;
    box-shadow: 0 0 0 2px rgba(136, 165, 191, 0.78);
  };

  ${getBreakpointsStyles({
      tablet: css`
    margin: 0;
    margin-left: 24px;`})
  },
`

export const LoginTxt = styled.span`
  margin-right: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #3E85F3;
`

export const SignupLink = styled(NavLink)`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  color: #ffffff;
  transition: all 0.25s ease-in-out;
  
  &:hover {
    color: #7aaff3;
    cursor: pointer;
    text-decoration: none;
  };

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px #7aaff3;
  };

  &:active {
    color: #3e85f3;
  };

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
  margin-bottom: 14px;
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: -4px;
  color: #3E85F3;
  ${getBreakpointsStyles({
      tablet: css`
    font-size: 104px;`
  })}
`

export const Category = styled.h2`
  display: inline-block;
  padding: 8px 18px;
  margin-bottom: 8px;
  color: #3E85F3;
  background: #dcebf7;
  border-radius: 44px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
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

export const Txt = styled.p`
  padding-bottom: 40px;
  font-style: normal;
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
  border-radius: 40px;
  ${getBreakpointsStyles({
      tablet: css`
    height: 700px;
    border-radius: 100px;`,
  desktop: css`
    width: 50%;`
  })}
`

export const Images = styled.img`
  position: absolute;
  border-radius: 8px;

  &.calendarOne {
    width: 251.75px;
    height: 196.76px;
    left: 34px;
    top: 100px;
    box-shadow: -17px 36px 45px rgba(0, 0, 0, 0.2);
    transform: rotate(-28deg);
  };
  
  ${getBreakpointsStyles({
      tablet: css`
    width: 457.33px;
    height: 357.44px;
    left: 80px;
    top: 160px;`
  })};

  &.calendarTwo {
    width: 254px;
    height: 199px;
    left: 204px;
    top: 100px;
    box-shadow: 0px 27.8704px 43.9236px rgba(0, 0, 0, 0.197407),
            0px 16.563px 23.8889px rgba(0, 0, 0, 0.157926),
            0px 8.6px 12.1875px rgba(0, 0, 0, 0.13),
            0px 3.5037px 6.11111px rgba(0, 0, 0, 0.102074),
            0px 43px 75px rgba(0, 0, 0, 0.26),
            0px 0.796296px 2.95139px rgba(0, 0, 0, 0.0625926);
    transform: rotate(-28deg);
  };
  
  ${getBreakpointsStyles({
      tablet: css`
    width: 463.21px;
    height: 362.34px;
    left: 380px;
    top: 160px;`
  })};

  &.calendarThree {
    width: 105.12px;
    height: 99.73px;
    left: 130px;
    top: 270px;
    box-shadow: 0px 3.5037px 6.11111px rgba(0, 0, 0, 0.102074),
            0px 43px 75px rgba(0, 0, 0, 0.26),
            0px 0.796296px 2.95139px rgba(0, 0, 0, 0.0625926);
    transform: rotate(-28deg);
    };

    ${getBreakpointsStyles({
      tablet: css`
      width: 190.96px;
      height: 181.17px;
      left: 255px;
      top: 485px;`
    })};


  &.navigationdark {
    width: 111.24px;
    height: 347.61px;
    left: -9px;
    top: 130px;
    box-shadow: -17px 36px 45px rgba(0, 0, 0, 0.2);
    transform: rotate(28deg);

    ${getBreakpointsStyles({
      tablet: css`
      width: 199px;
      height: 626px;
      left: 80px;
      top: 122px;`,
    desktop: css`
      width: 191px;
      height: 599px;
      left: 20px;
      top: 150px;`
    })}
};

  &.navigationlite {
    width: 111.24px;
    height: 347.61px;
    left: 130px;
    top: 130px;
    box-shadow: -17px 36px 45px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    transform: rotate(28deg);

     ${getBreakpointsStyles({
      tablet: css`
      width: 199px;
      height: 626px;
      left: 330px;
      top: 122px;`,
    desktop: css`
      width: 191px;
      height: 599px;
      left: 260px;
      top: 150px;`
     })}
    };
    
  &.day {
    width: 518px;
    height: 332px;
    left: 59px;
    top: 102px;
    padding: 11px;
    border-radius: 8px;
    border: 1.5px solid rgba(62, 133, 243, 0.4);
    ${getBreakpointsStyles({
      tablet: css`
      width: 704px;
      height: 568px;
      left: 84px;
      top: 84px;
      padding: 18px;`
    })}
}
`

export const ImageEllipse = styled.div`
  position: absolute;
  width: 256px;
  height: 256px;
    border-radius: 50%;
  background-image: radial-gradient(
        circle at center,
        rgba(62, 133, 243, 0) 40%,
        rgba(62, 133, 243, 0.1) 40%
    );

  ${getBreakpointsStyles({
      tablet: css`
    width: 617px;
    height: 617px;`
  })};

  &.calendar {
    left: 190px;
    top: 330px;
  ${getBreakpointsStyles({
      tablet: css`
      left: 300px;
      top: 515px;`
  })}
};
    
  &.sidebar {
    left: -115px;
    top: -100px;
     ${getBreakpointsStyles({
      tablet: css`
      left: -330px;
      top: -350px;`
     })};
    };
    
  &.day {
    display: none;
  }
`