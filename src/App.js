import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRouterProvider } from './navigation/provider'
import { AppThemeProvider } from './styles/theme/provider'
import { AuthContextProvider } from './contexts/auth'
import { ToastContainer } from 'react-toastify'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <AppThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AppRouterProvider />
        </LocalizationProvider>
        <ToastContainer />
      </AppThemeProvider>
    </AuthContextProvider>
  </QueryClientProvider>
)
