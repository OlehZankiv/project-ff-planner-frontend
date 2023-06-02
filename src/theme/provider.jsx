import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyles'
import { darkTheme, lightTheme } from './themes'
import { createContext, useContext, useState } from 'react'

// Styled Theme Provider

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

const AppStyledThemeProvider = ({ children }) => {
  const { themeType } = useAppThemeContext()

  return (
    <ThemeProvider theme={themes[themeType]}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}

// Change Theme Provider

const AppThemeContext = createContext({
  themeType: 'light',
  setThemeType: () => {},
})

export const AppThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState('light')

  return (
    <AppThemeContext.Provider value={{ themeType, setThemeType }}>
      <AppStyledThemeProvider>{children}</AppStyledThemeProvider>
    </AppThemeContext.Provider>
  )
}

export const useAppThemeContext = () => useContext(AppThemeContext)
