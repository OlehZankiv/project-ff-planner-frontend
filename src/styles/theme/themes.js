const themeCreator = ({ colors, shadows }) => ({
  colors,
  shadows,
})

const shadows = {
  modalShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
  buttonShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
  secondButtonShadow: '4px 2px 16px rgba(97, 97, 97, 0.1)',
  titleShadow: '0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)',
}

export const lightTheme = themeCreator({
  colors: {
    background: '#ffffff',
    secondaryBackground: '#dcebf7',
    text: '#111111',
    primary: '#3e85f3',
    hoverPrimary: '#2b78ef',
    textRed: '#da1414',
    error: '#E74A3B',
    success: '#3CBC81',
    white: '#ffffff',

    calendarBorder: '#E3E9EA',
    inputBorderDefault: '#DBDBDB',
    placeholderColor: '#DCE3E5',
    inputLabel: '#111111',
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
    secondaryBackground: '#dcebf7',
    text: '#ffffff',
    primary: '#3e85f3',
    white: '#ffffff',
    black: '#000000',
    secondary: '#21222C',
    error: '#E74A3B',
    success: '#3CBC81',
    content: '#21222C',

    calendarBorder: '#42434C',
    placeholderColor: '#86888a',
    inputBorderDefault: '#9d9d9d',
    inputLabel: '#62636A',
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
