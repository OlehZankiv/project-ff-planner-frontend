import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ROUTES } from './routes'
import { Loader, MainLayout } from '../components'
import { lazy, Suspense } from 'react'
import { useAuthContext } from '../contexts/auth'

const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const CalendarPage = lazy(() => import('../pages/calendar/CalendarPage'))
const LandingPage = lazy(() => import('../pages/landing/Landing'))

export const AppRouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route
          path={ROUTES.LANDING}
          element={
            <Suspense fallback={<Loader />}>
              <LandingPage />
            </Suspense>
          }
        />
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        <Route index element={<div>Home Page</div>} />
        <Route path={'/profile'} element={<div>PROFILE</div>} />

        <Route
          path={ROUTES.CALENDAR}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute>
                <CalendarPage />
              </ProtectedRoute>
            </Suspense>
          }
        />
        {/* TODO: Add additional pages here */}
      </Route>

      <Route
        path={ROUTES.LOGIN}
        element={
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.REGISTER}
        element={
          <Suspense fallback={<Loader />}>
            <RegisterPage />
          </Suspense>
        }
      />

      {/* TODO: Add 404 Page */}
      <Route path='*' element={<div>404 Page</div>} />
    </Routes>
  </BrowserRouter>
)

const ProtectedRoute = ({ children }) => {
  const { logger } = useAuthContext()
  const location = useLocation()

  if (!logger) {
    return <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />
  }

  return children
}
