import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ROUTES } from './routes'
import { Loader, MainLayout } from '../components'
import { lazy, Suspense } from 'react'
import { useAuthContext } from '../contexts/auth'

const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const CalendarPage = lazy(() => import('../pages/calendar/CalendarPage'))
const LandingPage = lazy(() => import('../pages/landing/LandingPage'))
const NotFoundPage = lazy(() => import('../pages/notFoundPage/NotFoundPage'))

export const AppRouterProvider = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.LANDING} element={<LandingPage />} />

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

        {/* TODO: Add 404 Page */}
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
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
