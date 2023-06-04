import styled, { css } from 'styled-components'
import { getDesktopStyles } from '../../styles/breakpoints'

export const ImageOfGoose = styled.img`
  display: none;

  ${getDesktopStyles(css`
    display: block;
    position: absolute;
    bottom: 0;
  `)}
`
