import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'
import { AuthLayout, Loader } from '../components'
import { lazy, Suspense } from 'react'
import CalendarToolbar from '../pages/CalendarToolbar/CalendarToolbar'

const LoginPage = lazy(() => import('../pages/login/LoginPage'))

export const AppRouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<CalendarToolbar />}>
        {/* <Route index element={<div>Home Page</div>} /> */}

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
