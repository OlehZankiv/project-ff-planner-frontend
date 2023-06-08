import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage'

const AuthContext = createContext({
  logger: null,
  setLogger: () => {},
  setToken: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getStorageItem(STORAGE_KEYS.TOKEN, null))
  const [logger, setLogger] = useState(getStorageItem(STORAGE_KEYS.LOGGER, null, false))

  useEffect(() => {
    setStorageItem(STORAGE_KEYS.TOKEN, token)
  }, [token])

  useEffect(() => {
    setStorageItem(STORAGE_KEYS.LOGGER, logger)
  }, [logger])

  return (
    <AuthContext.Provider
      value={{
        logger,
        setToken,
        setLogger,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
