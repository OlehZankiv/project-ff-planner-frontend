import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ROUTES } from './routes'
import { Loader, MainLayout } from '../components'
import { lazy, Suspense } from 'react'

const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const CalendarPage = lazy(() => import('../pages/calendar/CalendarPage'))
const LandingPage = lazy(() => import('../pages/landing/LandingPage'))

export const AppRouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        <Route index element={<div>Home Page</div>} />
        {/* TODO: Add additional pages here */}
      </Route>
      <Route path={ROUTES.LOGIN} element={<AuthLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <LoginPage />
            </Suspense>
          }
        />
        {/* TODO: Add additional pages here */}
      </Route>

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
