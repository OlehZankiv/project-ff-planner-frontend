import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyles'
import { darkTheme, lightTheme } from './themes'
import { createContext, useContext, useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/auth'

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

const AppThemeContext = createContext({
  themeType: 'light',
  setThemeType: () => {},
})

export const AppThemeProvider = ({ children }) => {
  const { logger } = useAuthContext()
  const [themeType, setThemeType] = useState('light')

  useEffect(() => {
    setThemeType(logger?.theme ?? 'light')
  }, [logger?.theme])

  return (
    <AppThemeContext.Provider value={{ themeType, setThemeType }}>
      <ThemeProvider theme={themes[themeType]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export const useAppThemeContext = () => useContext(AppThemeContext)
