import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'

import {
  getBreakpointsStyles,
  getDesktopStyles,
  useBreakpointValue,
  ScreenWrapper,
} from '../styles/breakpoints'
import { CloseIcon, UserCheckIcon, CalendarCheckOutIcon, LogOutIcon } from '../assets/icons'
import { AppLogo } from './AppLogo'
import { PrimaryColorBtn } from './PrimaryColorBtn'

export const SideBar = ({
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
  theme,
  selectedTab,
  setSelectedTab,
}) => {
  const owerlayRef = useRef()
  const { t } = useTranslation()
  const iconCheckSize = useBreakpointValue({ mobileValue: 20, tabletValue: 24, desktopValue: 24 })
  const iconLogOutSize = useBreakpointValue({ mobileValue: 18, tabletValue: 20, desktopValue: 20 })
  const iconClozeSize = useBreakpointValue({ mobileValue: 25, tabletValue: 33 })

  const IconCheckColor = (isSelected) => {
    if (isSelected) {
      return theme === 'light' ? '#3e85f3' : '#fff'
    }
    return theme === 'light' ? ' rgba(52, 52, 52, 0.5)' : '#fff'
  }

  const handleCloseBurgerMenu = () => {
    setIsBurgerMenuOpen(false)
  }

  const handleOwerlayClick = (e) => {
    if (e.target === owerlayRef.current) {
      handleCloseBurgerMenu()
    }
  }

  const handleChangeTab = (type) => {
    setSelectedTab(type)
  }

  return (
    <SidebarOverlay theme={theme} onClick={handleOwerlayClick} ref={owerlayRef}>
      <SidebarWrap isBurgerMenuOpen={isBurgerMenuOpen} theme={theme}>
        <div style={{ width: '100%' }}>
          <TopBox>
            <AppLogo orientation='horezontal' />
            <ButtonWrap onClick={handleCloseBurgerMenu}>
              <ScreenWrapper
                mobile={
                  <CloseIcon
                    size={iconClozeSize}
                    color={theme === 'light' ? ' rgba(52, 52, 52, 1)' : '#fff'}
                  />
                }
                tablet={
                  <CloseIcon
                    size={iconClozeSize}
                    color={theme === 'light' ? ' rgba(52, 52, 52, 1)' : '#fff'}
                  />
                }
              />
            </ButtonWrap>
          </TopBox>
          <div style={{ width: '100%' }}>
            <SidebarTitle theme={theme}>{t('User Panel')}</SidebarTitle>
            <TabsWrap>
              <NavButton
                selected={selectedTab === 'profile'}
                theme={theme}
                // to={'my_profile'}
                onClick={() => handleChangeTab('profile')}
              >
                <UserCheckIcon
                  size={iconCheckSize}
                  color={IconCheckColor(selectedTab === 'profile')}
                />
                <TabText theme={theme} selected={selectedTab === 'profile'}>
                  {t('My Account')}
                </TabText>
              </NavButton>
              <NavButton
                theme={theme}
                selected={selectedTab === 'calendar'}
                // to={'calendar'}
                onClick={() => handleChangeTab('calendar')}
              >
                <CalendarCheckOutIcon
                  size={iconCheckSize}
                  color={IconCheckColor(selectedTab === 'calendar')}
                />
                <TabText theme={theme} selected={selectedTab === 'calendar'}>
                  {t('Calendar')}
                </TabText>
              </NavButton>
            </TabsWrap>
          </div>
        </div>
        <PrimaryColorBtn isDefaultShadow={true}>
          {t('Log out')}
          <LogOutIcon size={iconLogOutSize} />
        </PrimaryColorBtn>
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
  align-items: start;
  min-height: 100vh;
  background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#13151A')};
  width: 70%;
  padding: 20px 24px;
  ${getBreakpointsStyles({
    tablet: css`
      width: 50%;
    `,
    desktop: css`
      width: 100%;
    `,
  })}
`

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  background: ' transparent';
  border-radius: 8px;
  ${(props) => props.selected && `background: ${props.theme === 'light' ? '#E3F3FF' : '#3e85f3'}`}
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
  ${(props) => props.selected && `color: ${props.theme === 'light' ? '#3e85f3' : '#fff'}`}
`

const TabsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`
