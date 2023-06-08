const themeCreator = ({ colors, shadows }) => ({
  colors,
  shadows,
  animation,
})

const animation = {
  sideBarDuration: '250ms',
  sideBarCubicBezier: 'linear',
}

const shadows = {
  modalShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
  buttonShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
  headingShadow: '0px 47px 355px rgba(0, 0, 0, 0.07),0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)',
  secondButtonShadow: '4px 2px 16px rgba(97, 97, 97, 0.1)',
  titleShadow: '0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)',
}

export const lightTheme = themeCreator({
  colors: {
    // Main
    white: '#ffffff',
    black: '#000000',
    primary: '#3e85f3',
    secondary: '#E5EDFA',
    error: '#E74A3B',
    success: '#3CBC81',
    content: '#ffffff',
    icon: '#343434',
    text: '#111111',

    // Background
    mainBackground: '#F7F6F9',
    background: '#ffffff',
    secondaryBackground: '#dcebf7',

    // Others
    feedbackModalLabels: '#5D5D5D',
    userNameText: '#343434',
    sideBarOverlay: '#e7ecfc79',
    sidebarTitle: '#999999',
    tabButtonActive: '#E3F3FF',
    tabContent: '#999999',
    tabContentSelected: '#3e85f3',
    calendarBorder: '#E3E9EA',
    inputBorderDefault: '#DBDBDB',
    placeholderColor: '#DCE3E5',
    inputLabel: '#111111',
    primaryButtonActive: '#2971e1',
    primaryButtonHover: '#2b78ef',
    reviewBorder: '#E7E7E7',
    secondaryButtonHover: '#d5deec',
    secondaryButtonActive: '#c6cfda',
    secondaryButtonText: '#343434',
    modalBackground: '#ffffff',
    modalOverlay: '#13151A',
    starDefault: '#CEC9C1',
    starActive: '#FFAC33',
    modalsInputBackground: '#F7F7F7',
    modalsInputBorder: 'transparent',
    feedbackListBackground: '#e3f3ff',
    calendarWeekDayText: '#21222C',
    scrollbarTrackBackground: '#ffffff',
    scrollbarThumbBackground: '#E7E5E5',
  },
  shadows,
  animation,
})

export const darkTheme = themeCreator({
  colors: {
    // Main
    white: '#ffffff',
    black: '#000000',
    primary: '#3e85f3',
    secondary: '#21222C',
    error: '#E74A3B',
    success: '#3CBC81',
    content: '#21222C',
    icon: '#ffffff',
    text: '#ffffff',

    // Background
    mainBackground: '#171820',
    background: '#13151A',
    secondaryBackground: '#dcebf7',

    // Others
    feedbackModalLabels: '#5B5C61',
    userNameText: '#ffffff',
    sideBarOverlay: '#28282a79',
    sidebarTitle: '#585A5D',
    tabButtonActive: '#3e85f3',
    tabContent: '#ffffff',
    tabContentSelected: '#ffffff',
    calendarBorder: '#42434C',
    placeholderColor: '#86888a',
    inputBorderDefault: '#9d9d9d',
    inputLabel: '#62636A',
    primaryButtonActive: '#2971e1',
    primaryButtonHover: '#2b78ef',
    secondaryButtonHover: '#21232c',
    reviewBorder: '#E7E7E7',
    secondaryButtonActive: '#16181e',
    secondaryButtonText: '#FFFFFF',
    modalBackground: '#171820',
    modalOverlay: '#3f3f3f',
    starDefault: '#353647',
    starActive: '#FFAC33',
    modalsInputBackground: 'transparent',
    modalsInputBorder: '#3A3B41',
    feedbackListBackground: '#21222C',
    calendarWeekDayText: '#62636A',
    scrollbarTrackBackground: '#2D3037',
    scrollbarThumbBackground: '#171820',
  },
  shadows,
  animation,
})
