import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage'

const AuthContext = createContext({
  logger: null,
  setLogger: () => {},
  setToken: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [logger, setLogger] = useState(null)

  useEffect(() => {
    setStorageItem(STORAGE_KEYS.TOKEN, token)
  }, [token])

  useEffect(() => {
    setToken(getStorageItem(STORAGE_KEYS.TOKEN, null))
  }, [])

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
