import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'
import { AuthLayout, Loader, MainLayout } from '../components'
import { lazy, Suspense } from 'react'

const LoginPage = lazy(() => import('../pages/login/LoginPage'))
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
  </BrowserRouter>
)
