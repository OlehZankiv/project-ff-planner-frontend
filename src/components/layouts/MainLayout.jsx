import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { BurgerMenuIcon, MoonIcon, SunIcon } from '../../assets/icons'
import { useAppThemeContext } from '../../styles/theme/provider'
import { useDimensions } from '../../hooks'
import { SideBar } from '../SideBar'

export const MainLayout = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const { width } = useDimensions()
  const { themeType, setThemeType } = useAppThemeContext()

  const handleThemeChange = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light')
  }
  return (
    <MainWrap>
      {width > 1024 && (
        <SideBar
          isBurgerMenuOpen={isBurgerMenuOpen}
          setIsBurgerMenuOpen={setIsBurgerMenuOpen}
          theme={themeType}
        />
      )}
      <ContentWrap>
        <Header>
          <Container>
            <HeaderWrap>
              {width < 1024 && <BurgerMenuIcon size={24} />}
              <TabWrap>
                <button onClick={handleThemeChange}>
                  {themeType === 'light' ? <MoonIcon size={24} /> : <SunIcon size={24} />}
                </button>
                <UserName>Nadia</UserName>
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
  background-color: #f7f6f9;
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
  max-width: 375px;
`

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const TabWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const UserName = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  color: #343434;
`
