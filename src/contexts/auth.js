import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, removeStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage'
import { useUser } from '../hooks/query'

const AuthContext = createContext({
  logger: null,
  token: null,
  setLogger: () => {},
  setToken: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getStorageItem(STORAGE_KEYS.TOKEN, null))
  const [logger, setLogger] = useState(getStorageItem(STORAGE_KEYS.LOGGER, null, false))

  const { user: dbUser } = useUser(logger?.id)

  useEffect(() => {
    if (!dbUser) return

    if (JSON.stringify(dbUser) !== JSON.stringify(logger)) setLogger(dbUser)
  }, [dbUser, logger])

  useEffect(() => {
    token ? setStorageItem(STORAGE_KEYS.TOKEN, token) : removeStorageItem(STORAGE_KEYS.TOKEN)
  }, [token])

  useEffect(() => {
    logger ? setStorageItem(STORAGE_KEYS.LOGGER, logger) : removeStorageItem(STORAGE_KEYS.LOGGER)
  }, [logger])

  return (
    <AuthContext.Provider
      value={{
        logger,
        token,
        setToken,
        setLogger,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
