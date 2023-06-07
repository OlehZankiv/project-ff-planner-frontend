import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'
import { Loader, MainLayout } from '../components'
import { lazy, Suspense } from 'react'

const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const CalendarPage = lazy(() => import('../pages/calendar/CalendarPage'))

export const AppRouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        <Route index element={<div>Home Page</div>} />
        <Route
          path={ROUTES.CALENDAR}
          element={
            <Suspense fallback={<Loader />}>
              <CalendarPage />
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
