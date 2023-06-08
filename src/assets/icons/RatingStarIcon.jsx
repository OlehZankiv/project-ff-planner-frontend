export const RatingStarIcon = ({ color, size, onClick, onMouseOver, onMouseLeave }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.97761 7.01427L11 1.28579L14.0224 7.01427C14.1815 7.31594 14.4716 7.52671 14.8077 7.58487L21.1898 8.68913L16.6757 13.3338C16.438 13.5784 16.3271 13.9194 16.3757 14.257L17.2977 20.668L11.4854 17.8101C11.1793 17.6595 10.8207 17.6595 10.5146 17.8101L4.70234 20.668L5.6243 14.257C5.67285 13.9194 5.56205 13.5784 5.32432 13.3338L0.810179 8.68913L7.19226 7.58487C7.52835 7.52671 7.81845 7.31594 7.97761 7.01427Z'
      fill={color}
      stroke={color}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      strokeWidth='1.2'
    />
  </svg>
)
