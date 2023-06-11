import { RotatingLines } from 'react-loader-spinner'

export const Spinner = () => {
  return (
    <RotatingLines
      strokeColor='white'
      strokeWidth='5'
      animationDuration='0.75'
      width='20'
    />
  )
}
