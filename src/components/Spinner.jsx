import { RotatingLines } from 'react-loader-spinner'

export const Spinner = ({ size = 20, color = 'white' }) => (
  <RotatingLines strokeColor={color} strokeWidth='5' animationDuration='0.75' width={size} />
)
