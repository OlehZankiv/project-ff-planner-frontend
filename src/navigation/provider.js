import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './routes'
import { LoginPage } from '../pages/auth/LoginPage'

// TODO: Add correct routes
const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <div>Hello world!</div>,
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
])

export const AppRouterProvider = ({ children }) => (
  <RouterProvider router={router}>{children}</RouterProvider>
)
