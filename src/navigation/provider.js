import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'
import { AuthLayout, Loader, MainLayout } from '../components'
import { lazy, Suspense } from 'react'

const LoginPage = lazy(() => import('../pages/login/LoginPage'))
const Landing = lazy(() => import('../pages/landing/Landing'))

export const AppRouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        <Route index element={<div>Home Page</div>} />
        {/* TODO: Add additional pages here */}

        <Route
          path={ROUTES.LANDING}
          element={
            <Suspense fallback={<Loader />}>
              <Landing />
            </Suspense>
          }
        />
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
