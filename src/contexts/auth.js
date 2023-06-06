import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage'

const AuthContext = createContext({
  logger: null,
  setLogger: () => {},
  setToken: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [logger, setLogger] = useState(null)

  const tokenMounted = useRef(false)
  useEffect(() => {
    if (!tokenMounted.current) {
      tokenMounted.current = true
      return
    }

    setStorageItem(STORAGE_KEYS.TOKEN, token)
  }, [token])

  const loggerMounted = useRef(false)

  useEffect(() => {
    if (!loggerMounted.current) {
      loggerMounted.current = true
      return
    }

    setStorageItem(STORAGE_KEYS.LOGGER, logger)
  }, [logger])

  useEffect(() => {
    setToken(getStorageItem(STORAGE_KEYS.TOKEN, null))
  }, [])

  useEffect(() => {
    setToken(getStorageItem(STORAGE_KEYS.LOGGER, null))
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
