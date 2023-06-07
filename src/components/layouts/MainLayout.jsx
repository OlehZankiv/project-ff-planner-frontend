import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled, { css, useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'

import { BurgerMenuIcon, MoonIcon, SunIcon } from '../../assets/icons'
import { useAppThemeContext } from '../../styles/theme/provider'
import { SideBar } from '../SideBar'
import {
  useBreakpointValue,
  getBreakpointsStyles,
  getDesktopStyles,
} from '../../styles/breakpoints'
import { Text } from '../Text'
import { OpacityButton } from '../buttons/OpacityButton'
import { Loader } from '../Loader'
import { Button } from '../buttons/Button'

export const MainLayout = () => {
  const { t } = useTranslation()
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState('calendar')
  const { themeType, setThemeType } = useAppThemeContext()
  const theme = useTheme()
  const iconSize = useBreakpointValue({ mobileValue: 24, tabletValue: 32, desktopValue: 32 })
  const nameFontSize = useBreakpointValue({
    mobileValue: 14,
    tabletValue: 18,
    desktopValue: 18,
  })

  const userName = 'Yuliia'

  const handleThemeChange = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light')
  }

  const firstLetersMaker = (str) => {
    return str
      .split(' ')
      .map((word) => word[0].toUpperCase())
      .join('')
      .slice(0, 2)
  }

  return (
    <MainWrap theme={theme}>
      <SideBar
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <ContentWrap>
        <Header>
          <Container>
            <HeaderWrap>
              <BurgerWrap>
                <ButtonWrap onClick={() => setIsBurgerMenuOpen(true)}>
                  <BurgerMenuIcon size={iconSize} color={theme.colors.icon} />{' '}
                </ButtonWrap>
              </BurgerWrap>
              <DesktopTitleWrap>
                <Text
                  type='h1'
                  fontSize={32}
                  fontWeight={700}
                  lineHeight={1}
                  color={theme.colors.text}
                  style={{
                    textShadow: theme.shadows.hedingShadow,
                  }}
                >
                  {selectedTab === 'calendar' ? t('Calendar') : t('User Profile')}
                </Text>
              </DesktopTitleWrap>
              <TabWrap>
                {selectedTab === 'calendar' && <Button title={t('Feedback')} onClick={() => {}} />}
                <InfoWrap>
                  <OpacityButton>
                    <ButtonWrap onClick={handleThemeChange}>
                      {themeType === 'light' ? (
                        <MoonIcon size={iconSize} color={theme.colors.primary} />
                      ) : (
                        <SunIcon size={iconSize} color={theme.colors.primary} />
                      )}
                    </ButtonWrap>
                  </OpacityButton>
                  <Text
                    type='p'
                    color={theme.colors.userNameText}
                    fontWeight={700}
                    fontSize={nameFontSize}
                  >
                    {userName}
                  </Text>
                  <OpacityButton>
                    <AvatarWrap theme={theme} onClick={() => setSelectedTab('profile')}>
                      <Text
                        type='p'
                        color={theme.colors.userNameText}
                        fontWeight={700}
                        fontSize={nameFontSize}
                      >
                        {firstLetersMaker(userName)}
                      </Text>
                    </AvatarWrap>
                  </OpacityButton>
                </InfoWrap>
              </TabWrap>
            </HeaderWrap>
          </Container>
        </Header>
        <Outletwrap>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Outletwrap>
      </ContentWrap>
    </MainWrap>
  )
}

const MainWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
`

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
`

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TabWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ButtonWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`

const BurgerWrap = styled.div`
  ${getDesktopStyles(css`
    display: none;
  `)}
`

const AvatarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1.8px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  ${getBreakpointsStyles({
    tablet: css`
      width: 44px;
      height: 44px;
    `,
    desktop: css`
      width: 44px;
      height: 44px;
    `,
  })}
`

const DesktopTitleWrap = styled.div`
  display: none;
  ${getDesktopStyles(css`
    display: flex;
    justify-content: center;
    align-items: center;
  `)}
`

const Outletwrap = styled.div`
  padding: 64px 20px 40px 20px;
  ${getBreakpointsStyles({
    tablet: css`
      padding: 64px 32px 32px 32px;
    `,
    desktop: css`
      padding: 32px;
    `,
  })}
`
