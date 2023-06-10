export const ArrowRight = ({ size = 61, color }) => (
<svg 
    width={size}
    height={size}
fill='none' 
xmlns='http://www.w3.org/2000/svg'>

 
    <g
      clipPath='url(#a)'>
    <path d='m41.815 28.194 2.293 1.559L.5 29.754v1.22l43.335-.001-2.16 1.241.608 1.058 4.97-2.856-4.751-3.231-.687 1.009Z'
    stroke={color}
       strokeLinecap='square'
      strokeWidth='1'
      strokeLinejoin='square'
    />
  </g>
  <defs>
    <clipPath id='a'>
      <path fill='fff' transform='matrix(0 -1 1 0 .5 61)' 
      d='M0 0h61v61H0z'/>
    </clipPath>
  </defs>
</svg>
)
