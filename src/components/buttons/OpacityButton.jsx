import styled, { css } from 'styled-components'

export const OpacityButton = styled.div`
  ${({ activeOpacity = 0.5, hoverOpacity = 0.7 }) => css`
    transition: opacity 0.25s;
    opacity: 1;
    cursor: pointer;

    &:hover {
      opacity: ${hoverOpacity};
    }

    &:active {
      opacity: ${activeOpacity};
    }
  `}
`
