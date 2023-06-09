import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  ${({ theme: { colors } }) => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
    }

    *::-webkit-scrollbar-track {
      background: ${colors.scrollbarTrackBackground};
      border-radius: 12px;
    }

    *::-webkit-scrollbar {
      width: 6px;
    }

    *::-webkit-scrollbar-thumb {
      background: ${colors.scrollbarThumbBackground};
      border-radius: 12px;
    }

    body {
      margin: 0;
      padding: 0;
      background-color: ${colors.background};
      color: ${colors.text};
    }
  `}
`
