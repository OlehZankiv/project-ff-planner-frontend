import { Outlet } from 'react-router-dom'
import FeedbackModal from '../../pages/FeedbackModal'

export const MainLayout = () => (
  <>
    main data
    <Outlet />
    <FeedbackModal />
  </>
)
