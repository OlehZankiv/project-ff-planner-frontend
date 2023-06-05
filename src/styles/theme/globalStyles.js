import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  ${({ theme: { colors } }) => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      background-color: ${colors.background};
      color: ${colors.text};
    }
  `}
`
