import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'
import { AuthLayout, Loader, MainLayout } from '../components'
import { lazy, Suspense } from 'react'

const LoginPage = lazy(() => import('../pages/login/LoginPage'))
const RegisterPage = lazy(() => import('../pages/register/RegisterPage'))

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
      </Route>
      <Route path={ROUTES.REGISTER} element={<RegisterPage />}/>
      {/* TODO: Add additional pages here */}

      {/* TODO: Add 404 Page */}
      <Route path='*' element={<div>404 Page</div>} />
    </Routes>
  </BrowserRouter>
)
