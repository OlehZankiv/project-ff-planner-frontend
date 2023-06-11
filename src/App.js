import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRouterProvider } from './navigation/provider'
import { AppThemeProvider } from './styles/theme/provider'
import { AuthContextProvider } from './contexts/auth'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <AppThemeProvider>
        <AppRouterProvider />
        <ToastContainer/>
      </AppThemeProvider>
    </AuthContextProvider>
  </QueryClientProvider>
)
