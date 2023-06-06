const themeCreator = ({ colors, shadows }) => ({
  colors,
  shadows,
  animation,
})

const animation = {
  duration: '250ms',
  cubicBezier: 'linear',
}

const shadows = {
  modalShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
  btnShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
  hedingShadow: '0px 47px 355px rgba(0, 0, 0, 0.07),0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)',
}

export const lightTheme = themeCreator({
  colors: {
    mainBacground: 'rgba(247, 246, 249, 1)',
    background: '#ffffff',
    text: '#111111',
    userNameText: '#34343',
    primary: '#3e85f3',
    primaryBtnHover: '#2b78ef',
    defaultIcon: ' rgba(52, 52, 52, 0.5)',
    selectedIcon: '#3e85f3',
    overlay: 'rgba(231, 236, 252, 0.671)',
    sidebarTitle: ' rgba(52, 52, 52, 0.5)',
    tabButtotActive: '#E3F3FF',
    tabText: ' rgba(52, 52, 52, 0.5)',
    tabTextSelected: '#3e85f3',

    modalBackground: '#ffffff',
    modalOverlay: '#13151A',
  },
  shadows,
})

export const darkTheme = themeCreator({
  colors: {
    mainBacground: 'rgba(23, 24, 32, 1)',
    background: '#13151A',
    text: '#ffffff',
    userNameText: '#ffffff',
    primary: '#3e85f3',
    primaryBtnHover: '#2b78ef',
    defaultIcon: '#ffffff',
    selectedIcon: '#ffffff',
    overlay: '#28282a79',
    sidebarTitle: 'rgba(250, 250, 250, 0.3)',
    tabButtotActive: '#3e85f3',
    tabText: '#ffffff',
    tabTextSelected: '#ffffff',

    modalBackground: '#171820',
    modalOverlay: '#3f3f3f',
  },
  shadows,
})
