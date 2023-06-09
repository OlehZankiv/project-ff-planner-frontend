export const BurgerMenuIcon = ({ size = 24, color }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 12H21'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M3 6H21' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M3 18H21'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
