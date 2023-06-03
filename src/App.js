import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRouterProvider } from './navigation/provider'
import { AppThemeProvider } from './styles/theme/provider'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppThemeProvider>
      <AppRouterProvider />
    </AppThemeProvider>
  </QueryClientProvider>
)
