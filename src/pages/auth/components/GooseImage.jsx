import styled, { css } from 'styled-components'
import { getDesktopStyles, sizes } from '../../../styles/breakpoints'
import { useDimensions } from '../../../hooks'

export const GooseImage = ({ image, alt, right, left }) => {
  const { width } = useDimensions()
  const leftImageWidth = width >= sizes.desktop ? '20vw' : '25vw'

  return (
    <ImageOfGoose
      style={{
        width: `calc(${leftImageWidth} * (${width} / ${sizes.desktop}))`,
        right,
        left,
      }}
      src={image}
      alt={alt}
    />
  )
}

const ImageOfGoose = styled.img`
  display: none;

  ${getDesktopStyles(css`
    max-width: 30vw;
    display: block;
    position: absolute;
    bottom: 0;
  `)}
`
