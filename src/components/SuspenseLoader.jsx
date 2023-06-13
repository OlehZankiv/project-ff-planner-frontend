import { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import { Spinner } from './Spinner'
import { ROUTES } from '../navigation/routes'

export const SuspenseLoader = () => {
  const { colors } = useTheme()

  const { backgroundColor, spinnerColor } = useMemo(() => {
    if (window.location.pathname === ROUTES.LANDING)
      return { backgroundColor: colors.primary, spinnerColor: colors.white }

    if ([ROUTES.LOGIN, ROUTES.REGISTER].some((route) => window.location.pathname.includes(route)))
      return { backgroundColor: colors.secondaryBackground, spinnerColor: colors.primary }

    return { backgroundColor: colors.content, spinnerColor: colors.text }
  }, [colors, window.location.pathname])

  return (
    <Wrapper style={{ backgroundColor }}>
      <Spinner size={42} color={spinnerColor} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
