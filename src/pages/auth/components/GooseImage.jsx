import styled, { css } from 'styled-components'
import { getDesktopStyles, sizes } from '../../../styles/breakpoints'
import { useDimensions } from '../../../hooks'

export const GooseImage = ({image1x, image2x, text, right}) => {
  const { width } = useDimensions()
  const leftImageWidth = width >= sizes.desktop ? '20vw' : '25vw'

  return (
    <ImageOfGoose
      style={{
        width: `calc(${leftImageWidth} * (${width} / ${sizes.desktop}))`, right: `${right}`,
      }}
      srcSet={`${image1x} 1x, ${image2x} 2x`}
      src={image1x}
      alt={text}
    ></ImageOfGoose>
  )
}

const ImageOfGoose = styled.img`
  display: none;

  ${getDesktopStyles(css`
    display: block;
    position: absolute;
    bottom: 0;
  `)}
`
