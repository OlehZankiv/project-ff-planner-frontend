import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRouterProvider } from './navigation/provider'
import { AppThemeProvider } from './styles/theme/provider'
import { AuthContextProvider } from './contexts/auth'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <AppThemeProvider>
        <AppRouterProvider />
      </AppThemeProvider>
    </AuthContextProvider>
  </QueryClientProvider>
)
