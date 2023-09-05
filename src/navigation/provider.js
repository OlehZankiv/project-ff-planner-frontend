import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ROUTES } from './routes'
import { MainLayout, SuspenseLoader } from '../components'
import { lazy, Suspense } from 'react'
import { useAuthContext } from '../contexts/auth'

const LandingPage = lazy(() => import('../pages/landing/LandingPage'))
const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const ProfilePage = lazy(() => import('../pages/profile/ProfilePage'))
const CalendarPage = lazy(() => import('../pages/calendar/CalendarPage'))
const ProductivityPage = lazy(() => import('../pages/productivity/ProductivityPage'))
const NotFoundPage = lazy(() => import('../pages/404/NotFoundPage'))

export const AppRouterProvider = () => (
  <BrowserRouter>
    <Suspense fallback={<SuspenseLoader />}>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.LANDING} element={<LandingPage />} />

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.PRODUCTIVITY} element={<ProductivityPage />} />
          <Route path={ROUTES.CALENDAR} element={<CalendarPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
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
