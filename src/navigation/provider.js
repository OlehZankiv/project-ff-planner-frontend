import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ROUTES } from './routes'
import { Loader, MainLayout } from '../components'
import { lazy, Suspense } from 'react'
import { useAuthContext } from '../contexts/auth'
import { BASE_GITHUB_PAGES_URL } from '../utils/constants'

const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const CalendarPage = lazy(() => import('../pages/calendar/CalendarPage'))

export const AppRouterProvider = () => (
  <BrowserRouter basename={BASE_GITHUB_PAGES_URL}>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path={ROUTES.PROFILE}
            element={
              <ProtectedRoute>
                <div>PROFILE</div>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.CALENDAR}
            element={
              <ProtectedRoute>
                <CalendarPage />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

        {/* TODO: Add 404 Page */}
        <Route path='*' element={<div>404 Page</div>} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)

const ProtectedRoute = ({ children }) => {
  const { token } = useAuthContext()
  const location = useLocation()

  if (!token) return <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />

  return children
}
