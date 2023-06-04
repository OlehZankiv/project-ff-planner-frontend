import styled, { css } from 'styled-components'
import { getDesktopStyles } from '../../styles/breakpoints'

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #dcebf7;
`

export const ImageOfGoose = styled.img`
  display: none;

  ${getDesktopStyles(css`
    display: block;
    position: absolute;
    bottom: 0;
  `)}
`

export const ImageOfGooseInRocket = styled.img`
  display: none;

  ${getDesktopStyles(css`
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
  `)}
`
