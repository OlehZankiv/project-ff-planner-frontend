import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyles'
import { darkTheme, lightTheme } from './themes'
import { createContext, useContext, useState } from 'react'

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

const AppThemeContext = createContext({
  themeType: 'light',
  setThemeType: () => {},
})

export const AppThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState('light')

  return (
    <AppThemeContext.Provider value={{ themeType, setThemeType }}>
      <ThemeProvider theme={themes[themeType]}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export const useAppThemeContext = () => useContext(AppThemeContext)
