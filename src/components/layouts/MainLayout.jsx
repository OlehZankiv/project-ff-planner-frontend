import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { useTranslation } from 'react-i18next'
import { BurgerMenuIcon, MoonIcon, SunIcon } from '../../assets/icons'
import { useAppThemeContext } from '../../styles/theme/provider'
import { SideBar } from '../SideBar'
import {
  useBreakpointValue,
  ScreenWrapper,
  getBreakpointsStyles,
  getDesktopStyles,
} from '../../styles/breakpoints'
import { PrimaryColorBtn } from '../PrimaryColorBtn'
import { Text } from '../Text'

export const MainLayout = () => {
  const { t } = useTranslation()
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState('calendar')
  const { themeType, setThemeType } = useAppThemeContext()
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
    const words = str.split(' ')
    const capitalizedWords = words
      .map((word) => {
        return word.split('')[0].toUpperCase()
      })
      .join('')
    return capitalizedWords
  }

  return (
    <MainWrap theme={themeType}>
      {isBurgerMenuOpen && (
        <SideBar
          isBurgerMenuOpen={isBurgerMenuOpen}
          setIsBurgerMenuOpen={setIsBurgerMenuOpen}
          theme={themeType}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      )}
      <ScreenWrapper
        desktop={
          <SideBar
            isBurgerMenuOpen={isBurgerMenuOpen}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
            theme={themeType}
          />
        }
      />
      <ContentWrap>
        <Header>
          <Container>
            <HeaderWrap>
              <BurgerWrap>
                <ButtonWrap onClick={() => setIsBurgerMenuOpen(true)}>
                  <BurgerMenuIcon
                    size={iconSize}
                    color={themeType === 'light' ? ' rgba(52, 52, 52, 1)' : '#fff'}
                  />{' '}
                </ButtonWrap>
              </BurgerWrap>
              <DesctopTitleWrap>
                <Text
                  type={'h1'}
                  fontSize={32}
                  fontWeight={700}
                  lineHeight={1}
                  color={themeType === 'light' ? '#111111' : '#fff'}
                  style={{
                    textShadow:
                      '0px 47px 355px rgba(0, 0, 0, 0.07),0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)',
                  }}
                >
                  {selectedTab === 'calendar' ? 'Calendar' : 'User Profile'}
                </Text>
              </DesctopTitleWrap>
              <TabWrap>
                {selectedTab === 'calendar' && (
                  <PrimaryColorBtn theme={themeType}>{t('Feedback')}</PrimaryColorBtn>
                )}
                <InfoWrap>
                  <ButtonWrap onClick={handleThemeChange}>
                    {themeType === 'light' ? (
                      <MoonIcon size={iconSize} />
                    ) : (
                      <SunIcon size={iconSize} />
                    )}
                  </ButtonWrap>
                  <Text
                    type={'p'}
                    color={themeType === 'light' ? ' #34343' : '#fff'}
                    fontWeight={700}
                    lineHeight={1.29}
                    fontSize={nameFontSize}
                  >
                    {userName}
                  </Text>
                  <AvatarWrap>{firstLetersMaker(userName)}</AvatarWrap>
                </InfoWrap>
              </TabWrap>
            </HeaderWrap>
          </Container>
        </Header>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </ContentWrap>
    </MainWrap>
  )
}

const MainWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) =>
    props.theme === 'light' ? 'rgba(247, 246, 249, 1)' : 'rgba(23, 24, 32, 1)'};
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
  border: 1.8px solid #3e85f3;
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

const DesctopTitleWrap = styled.div`
  display: none;
  ${getDesktopStyles(css`
    display: flex;
    justify-content: center;
    align-items: center;
  `)}
`
