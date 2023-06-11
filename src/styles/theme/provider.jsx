import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyles'
import { darkTheme, lightTheme } from './themes'
import { createContext, useContext, useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/auth'
import { useUpdateUser } from '../../hooks/query'
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../../utils/storage'

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

const AppThemeContext = createContext({
  themeType: 'light',
  setThemeType: () => {},
})

export const AppThemeProvider = ({ children }) => {
  const { logger, isLoading } = useAuthContext()

  const [themeType, setThemeType] = useState(getStorageItem(STORAGE_KEYS.THEME, 'light'))
  const { updateTheme } = useUpdateUser()

  useEffect(() => {
    if (!logger) {
      return isLoading ? undefined : setTheme('light')
    }

    setTheme(logger.theme)
  }, [logger?.theme, isLoading])

  const setTheme = (type, withRequest = false) => {
    setStorageItem(STORAGE_KEYS.THEME, type)
    withRequest && updateTheme(type)
    setThemeType(type)
  }

  return (
    <AppThemeContext.Provider
      value={{
        themeType,
        setThemeType: (theme) => setTheme(theme, true),
      }}
    >
      <ThemeProvider theme={themes[themeType]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export const useAppThemeContext = () => useContext(AppThemeContext)
