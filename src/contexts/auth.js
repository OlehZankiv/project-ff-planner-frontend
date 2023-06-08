import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage'
import { useUser } from '../hooks/query'

const AuthContext = createContext({
  logger: null,
  setLogger: () => {},
  setToken: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getStorageItem(STORAGE_KEYS.TOKEN, null))
  const [logger, setLogger] = useState(getStorageItem(STORAGE_KEYS.LOGGER, null, false))

  const { user: dbUser } = useUser(logger?.id)

  useEffect(() => {
    if (JSON.stringify(dbUser) !== JSON.stringify(logger)) setLogger(dbUser)
  }, [dbUser, logger])

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
