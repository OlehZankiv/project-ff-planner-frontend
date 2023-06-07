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
  btnShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
  hedingShadow: '0px 47px 355px rgba(0, 0, 0, 0.07),0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)',
  secondButtonShadow: '4px 2px 16px rgba(97, 97, 97, 0.1)',
}

export const lightTheme = themeCreator({
  colors: {
    mainBackground: 'rgba(247, 246, 249, 1)',
    background: '#ffffff',
    text: '#111111',
    userNameText: '#34343',
    primary: '#3e85f3',
    primaryBtnHover: '#2b78ef',
    defaultIcon: ' rgba(52, 52, 52, 0.5)',
    selectedIcon: '#3e85f3',
    overlay: 'rgba(231, 236, 252, 0.671)',
    sidebarTitle: ' rgba(52, 52, 52, 0.5)',
    tabButtonActive: '#E3F3FF',
    tabText: ' rgba(52, 52, 52, 0.5)',
    tabTextSelected: '#3e85f3',
    burgerIcon: ' rgba(52, 52, 52, 1)',
    white: '#ffffff',
    black: '#000000',
    secondary: '#E5EDFA',
    error: '#E74A3B',
    success: '#3CBC81',
    content: '#ffffff',

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
    mainBackground: 'rgba(23, 24, 32, 1)',
    background: '#13151A',
    text: '#ffffff',
    userNameText: '#ffffff',
    primary: '#3e85f3',
    primaryBtnHover: '#2b78ef',
    defaultIcon: '#ffffff',
    selectedIcon: '#ffffff',
    overlay: '#28282a79',
    sidebarTitle: 'rgba(250, 250, 250, 0.3)',
    tabButtonActive: '#3e85f3',
    tabText: '#ffffff',
    tabTextSelected: '#ffffff',
    burgerIcon: '#ffffff',
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
