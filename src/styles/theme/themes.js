const themeCreator = ({ colors, shadows }) => ({
  colors,
  shadows,
})

const shadows = {
  modalShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
}

export const lightTheme = themeCreator({
  colors: {
    background: '#ffffff',
    secondaryBackgroundColor: '#dcebf7',
    text: '#111111',
    primaryColor: '#3e85f3',
    hoverPrimaryColor: '#2b78ef',

    modalBackground: '#ffffff',
    modalOverlay: '#13151A',
  },
  shadows,
})

export const darkTheme = themeCreator({
  colors: {
    background: '#13151A',
    text: '#ffffff',

    modalBackground: '#171820',
    modalOverlay: '#3f3f3f',
  },
  shadows,
})
