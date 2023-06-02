import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRouterProvider } from './navigation/provider'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppRouterProvider />
  </QueryClientProvider>
)
