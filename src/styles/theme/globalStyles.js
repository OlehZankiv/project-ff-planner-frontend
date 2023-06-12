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

    // MUI time picker

    .MuiPaper-root.MuiPaper-elevation {
      border-radius: 10px;
      background-color: ${colors.modalBackground};

      .MuiTypography-root {
        color: ${colors.text};
      }

      .MuiClock-squareMask {
        background-color: ${colors.primary};
      }

      .MuiClockNumber-root {
        color: ${colors.white};
      }

      .MuiClockNumber-root.Mui-selected {
        color: ${colors.primary};
      }

      .MuiClockPointer-root,
      .MuiClock-pin,
      .MuiClockPointer-thumb {
        border-color: ${colors.white};
        background-color: ${colors.white};
      }

      .MuiTimeClock-arrowSwitcher button {
        color: ${colors.text};
      }

      .MuiDialogActions-root button {
        color: ${colors.primary};
      }
    }
  `}
`
