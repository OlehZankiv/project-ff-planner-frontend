const themeCreator = ({ colors, shadows }) => ({
  colors,
  shadows,
})

const shadows = {
  modalShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
  btnShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
}

export const lightTheme = themeCreator({
  colors: {
    background: '#ffffff',
    text: '#111111',
    primary: '#3e85f3',
    primaryBtnHover: '#2b78ef',

    modalBackground: '#ffffff',
    modalOverlay: '#13151A',
  },
  shadows,
})

export const darkTheme = themeCreator({
  colors: {
    background: '#13151A',
    text: '#ffffff',
    primary: '#3e85f3',
    primaryBtnHover: '#2b78ef',

    modalBackground: '#171820',
    modalOverlay: '#3f3f3f',
  },
  shadows,
})
