const themeCreator = ({ colors, sizes }) => ({
  colors,
  sizes,
})

const mainSizes = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 16,
  xl: 32,
}

export const lightTheme = themeCreator({
  colors: {
    background: '#ffffff',
    text: '#111111',
  },
  sizes: mainSizes,
})

export const darkTheme = themeCreator({
  colors: {
    background: '#13151A',
    text: '#ffffff',
  },
  sizes: mainSizes,
})
