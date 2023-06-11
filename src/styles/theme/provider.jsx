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
    if (!logger || isLoading) return
    setStorageItem(STORAGE_KEYS.THEME, logger.theme)
    setThemeType(logger.theme)
  }, [logger?.theme])

  return (
    <AppThemeContext.Provider
      value={{
        themeType,
        setThemeType: (type) => {
          setStorageItem(STORAGE_KEYS.THEME, type)
          updateTheme(type)
          setThemeType(type)
        },
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
