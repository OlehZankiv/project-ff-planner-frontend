export const firstLettersMaker = (str) =>
  str
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('')
    .slice(0, 2)
