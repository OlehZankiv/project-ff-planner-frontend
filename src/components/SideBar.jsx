import styled, { css, useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
// import {
//   useNavigate,
// } from 'react-router-dom'
import { useRef } from 'react'

import { getBreakpointsStyles, getDesktopStyles, useBreakpointValue } from '../styles/breakpoints'
import { CloseIcon, UserCheckIcon, CalendarCheckOutIcon, LogOutIcon } from '../assets/icons'
import { AppLogo } from './AppLogo'
import { OpacityButton } from './OpacityButton'
import { PrimaryColorBtn } from './PrimaryColorBtn'
import { Text } from './Text'

export const SideBar = ({ isBurgerMenuOpen, setIsBurgerMenuOpen, selectedTab, setSelectedTab }) => {
  // const navigate = useNavigate()
  const theme = useTheme()
  const owerlayRef = useRef()
  const { t } = useTranslation()
  const iconCheckSize = useBreakpointValue({ mobileValue: 20, tabletValue: 24, desktopValue: 24 })
  const iconLogOutSize = useBreakpointValue({ mobileValue: 18, tabletValue: 20, desktopValue: 20 })
  const iconClozeSize = useBreakpointValue({ mobileValue: 25, tabletValue: 33 })

  const handleOwerlayClick = (e) => {
    if (e.target === owerlayRef.current) {
      setIsBurgerMenuOpen(false)
    }
  }

  const handleChangeTab = (type) => {
    setSelectedTab(type)
    // navigate(`/${type}`)
  }

  return (
    <SidebarOverlay
      theme={theme}
      onClick={handleOwerlayClick}
      ref={owerlayRef}
      isBurgerMenuOpen={isBurgerMenuOpen}
    >
      <SidebarWrap isBurgerMenuOpen={isBurgerMenuOpen} theme={theme}>
        <div style={{ width: '100%' }}>
          <TopBox>
            <AppLogo orientation='horezontal' />
            <OpacityButton>
              <CloseIconWrap onClick={() => setIsBurgerMenuOpen(false)}>
                <CloseIcon size={iconClozeSize} color={theme.colors.defaultIcon} />
              </CloseIconWrap>
            </OpacityButton>
          </TopBox>
          <div style={{ width: '100%' }}>
            <SidebarTitle theme={theme}>{t('User Panel')}</SidebarTitle>
            <TabsWrap>
              <NavButton
                selected={selectedTab === 'profile'}
                theme={theme}
                onClick={() => handleChangeTab('profile')}
              >
                <UserCheckIcon
                  size={iconCheckSize}
                  color={
                    selectedTab === 'profile' ? theme.colors.selectedIcon : theme.colors.defaultIcon
                  }
                />
                <Text
                  type='p'
                  fontWeight={600}
                  color={`${selectedTab === 'profile' ? 'tabTextSelected' : 'tabText'}`}
                >
                  {t('My Account')}
                </Text>
              </NavButton>
              <NavButton
                theme={theme}
                selected={selectedTab === 'calendar'}
                onClick={() => handleChangeTab('calendar')}
              >
                <CalendarCheckOutIcon
                  size={iconCheckSize}
                  color={
                    selectedTab === 'calendar'
                      ? theme.colors.selectedIcon
                      : theme.colors.defaultIcon
                  }
                />
                <Text
                  type='p'
                  fontWeight={600}
                  color={`${selectedTab === 'calendar' ? 'tabTextSelected' : 'tabText'}`}
                >
                  {' '}
                  {t('Calendar')}
                </Text>
              </NavButton>
            </TabsWrap>
          </div>
        </div>
        <PrimaryColorBtn isDefaultShadow={true} theme={theme}>
          {t('Log out')}
          <LogOutIcon size={iconLogOutSize} />
        </PrimaryColorBtn>
      </SidebarWrap>
    </SidebarOverlay>
  )
}

const SidebarOverlay = styled.div`
  ${({ isBurgerMenuOpen, theme }) => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    ${isBurgerMenuOpen &&
    `opacity: 1;
    visibility: visible;
    pointer-events: all;`}
    transition: opacity ${theme.animation.duration} ${theme.animation.cubicBezier},
        visibility ${theme.animation.duration} ${theme.animation.cubicBezier};
    background-color: ${theme.colors.overlay};
    ${getDesktopStyles(
      css`
        position: static;
        width: 25%;
        opacity: 1;
        visibility: visible;
        pointer-events: all;
      `,
    )};
  `}
`

const SidebarWrap = styled.div`
  ${({ isBurgerMenuOpen, theme }) => css`
    transform: translateX(-100%);
    ${isBurgerMenuOpen && 'transform: translateX(0);'}
    transition: transform ${theme.animation.duration} ${theme.animation.cubicBezier};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    min-height: 100vh;
    background-color: ${theme.colors.background};
    width: 70%;
    padding: 20px 24px;
    ${getBreakpointsStyles({
      tablet: css`
        width: 50%;
      `,
      desktop: css`
        width: 100%;
        transform: translateX(0);
      `,
    })}
  `}
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
  color: ${({ theme }) => theme.colors.sidebarTitle};
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

const CloseIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  ${getDesktopStyles(
    css`
      display: none;
    `,
  )}
`

const NavButton = styled.button`
  display: flex;
  padding: 20px 16px;
  background: transparent;
  border-radius: 8px;
  border: none;
  ${({ selected, theme }) => selected && `background: ${theme.colors.tabButtotActive}`}
`

const TabsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`
