const themeCreator = ({ colors, shadows }) => ({
  colors,
  shadows,
})

const shadows = {
  modalShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
  buttonShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
  secondButtonShadow: '4px 2px 16px rgba(97, 97, 97, 0.1)',
}

export const lightTheme = themeCreator({
  colors: {
    background: '#ffffff',
    text: '#111111',
    primary: '#3e85f3',
    white: '#ffffff',
    black: '#000000',
    secondary: '#E5EDFA',

    secondaryButtonHover: '#d5deec',
    secondaryButtonActive: '#c6cfda',
    primaryButtonActive: '#2971e1',
    primaryButtonHover: '#2b78ef',
    secondaryButtonText: '#343434',
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
    white: '#ffffff',
    black: '#000000',
    secondary: '#21222C',

    secondaryButtonHover: '#21232c',
    secondaryButtonActive: '#16181e',
    primaryButtonActive: '#2971e1',
    primaryButtonHover: '#2b78ef',
    secondaryButtonText: '#FFFFFF',
    modalBackground: '#171820',
    modalOverlay: '#3f3f3f',
  },
  shadows,
})
