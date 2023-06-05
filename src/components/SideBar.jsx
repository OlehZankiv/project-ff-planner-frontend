import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import {
  ScreenWrapper,
  getBreakpointsStyles,
  getDesktopStyles,
  useBreakpointValue,
} from '../styles/breakpoints'
import { CloseIcon, UserCheckIcon, CalendarCheckOutIcon, LogOutIcon } from '../assets/icons'
import { useRef } from 'react'

export const SideBar = ({ isBurgerMenuOpen, setIsBurgerMenuOpen, theme }) => {
  const owerlayRef = useRef()
  const { t } = useTranslation()
  const iconCheckSize = useBreakpointValue({ mobileValue: 20, tabletValue: 24, desktopValue: 24 })
  const iconLogOutSize = useBreakpointValue({ mobileValue: 18, tabletValue: 20, desktopValue: 20 })
  const iconClozeSize = useBreakpointValue({ mobileValue: 25, tabletValue: 33 })

  const handleCloseBurgerMenu = () => {
    setIsBurgerMenuOpen(false)
  }

  const handleOwerlayClick = (e) => {
    if (e.target === owerlayRef.current) {
      handleCloseBurgerMenu()
    }
  }

  return (
    <SidebarOverlay theme={theme} onClick={handleOwerlayClick} ref={owerlayRef}>
      <SidebarWrap isBurgerMenuOpen={isBurgerMenuOpen} theme={theme}>
        <div>
          <ScreenWrapper
            mobile={
              <TopBox>
                <LogoWrap>
                  {/* <Logo src={images} alt='logo' /> */}
                  {/* <LogoText>GooseTrack</LogoText> */}
                </LogoWrap>
                <ButtonWrap onClick={handleCloseBurgerMenu}>
                  <CloseIcon
                    size={iconClozeSize}
                    color={theme === 'light' ? ' rgba(52, 52, 52, 1)' : '#fff'}
                  />
                </ButtonWrap>
              </TopBox>
            }
            tablet={
              <TopBox>
                <LogoWrap>
                  {/* <Logo src={logoTab} alt='logo' /> */}
                  {/* <LogoText>GooseTrack</LogoText> */}
                </LogoWrap>
                <ButtonWrap onClick={handleCloseBurgerMenu}>
                  <CloseIcon
                    size={iconClozeSize}
                    color={theme === 'light' ? ' rgba(52, 52, 52, 1)' : '#fff'}
                  />
                </ButtonWrap>
              </TopBox>
            }
            desktop={
              <TopBox>
                <LogoWrap>
                  {/* <Logo src={logoDes} alt='logo' /> */}
                  {/* <LogoText>GooseTrack</LogoText> */}
                </LogoWrap>
              </TopBox>
            }
          />
          <div>
            <SidebarTitle theme={theme}>{t('User Panel')}</SidebarTitle>
            <TabsWrap>
              <NavButton theme={theme} to={'my_profile'}>
                <UserCheckIcon
                  size={iconCheckSize}
                  color={theme === 'light' ? ' rgba(52, 52, 52, 0.5)' : '#fff'}
                />
                <TabText theme={theme}>{t('My Account')}</TabText>
              </NavButton>
              <NavButton theme={theme} to={'calendar'}>
                <CalendarCheckOutIcon
                  size={iconCheckSize}
                  color={theme === 'light' ? ' rgba(52, 52, 52, 0.5)' : '#fff'}
                />
                <TabText theme={theme}>{t('Calendar')}</TabText>
              </NavButton>
            </TabsWrap>
          </div>
        </div>
        <LogOutBtn type='button'>
          {t('Log out')}
          <LogOutIcon size={iconLogOutSize} />
        </LogOutBtn>
      </SidebarWrap>
    </SidebarOverlay>
  )
}

const SidebarOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.theme === 'light' ? 'rgba(231, 236, 252, 0.671)' : '#28282a79'};
  ${getDesktopStyles(
    css`
      position: static;
      width: 25%;
    `,
  )}
`

const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#13151A')};
  width: 290px;
  padding: 20px 24px;
  ${getBreakpointsStyles({
    desktop: css`
      width: 100%;
    `,
  })}
`

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
  ${getBreakpointsStyles({
    tablet: css`
      margin-bottom: 50px;
    `,
    desktop: css`
      margin-bottom: 32px;
    `,
  })}
`

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

// const LogoText = styled.span`
//   font-family: 'Coolvetica';
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 1.38;
//   color: #3e85f3;
//   text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
//   ${getBreakpointsStyles({
//     tablet: css`
//       font-size: 18px;
//     `,
//     desktop: css`
//       font-size: 24px;
//     `,
//   })}
// `

const SidebarTitle = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.39;
  color: ${(props) =>
    props.theme === 'light' ? ' rgba(52, 52, 52, 0.5)' : 'rgba(250, 250, 250, 0.3)'};
  margin-bottom: 24px;
  ${getBreakpointsStyles({
    tablet: css`
      font-size: 14px;
      margin-bottom: 32px;
    `,
    desktop: css`
      font-size: 14px;
    `,
  })}
`

const ButtonWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`

const NavButton = styled(NavLink)`
  display: flex;
  padding: 20px 16px;

  background: ${(props) => (props.theme === 'light' ? ' #e3f3ff' : 'transparent')};
  border-radius: 8px;
  color: #3e85f3;
`

const TabText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.39;
  color: ${(props) => (props.theme === 'light' ? ' rgba(52, 52, 52, 0.5)' : '#fff')};
  /* color: #3e85f3; */
  text-decoration: none;
  ${getBreakpointsStyles({
    tablet: css`
      font-size: 16px;
    `,
  })}
`

const TabsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const LogOutBtn = styled.button`
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border: none;
  padding: 14px;
  gap: 6px;
  color: #fff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  &:hover,
  &:focus {
    background: #2b78ef;
  }
`
