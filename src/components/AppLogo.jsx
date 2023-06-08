import {
  GooseLogo,
  GooseLogo_2X,
  GooseLogo_3X,
  GooseLogoText,
  GooseLogoText_2X,
  GooseLogoText_3X,
} from '../assets/images/logo'
import { generateSrcConfig, Image } from './Image'
import styled, { css } from 'styled-components'
import { useAppThemeContext } from '../styles/theme/provider'

export const AppLogo = ({ orientation = 'vertical' }) => {
  const { themeType } = useAppThemeContext()

  const isVertical = orientation === 'vertical'
  const isDarkTheme = themeType === 'dark'

  return (
    <Wrapper isVertical={isVertical}>
      <Image
        srcSetConfiguration={generateSrcConfig({
          desktop: { src: GooseLogo_3X, width: 426, widthOnScreen: isVertical ? 10 : 5 },
          tablet: { src: GooseLogo_2X, width: 284, widthOnScreen: isVertical ? 18 : 8 },
          mobile: { src: GooseLogo, width: 142, widthOnScreen: isVertical ? 25 : 9 },
        })}
        alt='App Logo'
      />
      <Image
        style={{
          filter:
            isVertical || isDarkTheme
              ? 'unset'
              : 'invert(42%) sepia(34%) saturate(3517%) hue-rotate(203deg) brightness(103%) contrast(91%)',
        }}
        srcSetConfiguration={generateSrcConfig({
          desktop: { src: GooseLogoText_3X, width: 1800, widthOnScreen: isVertical ? 35 : 8 },
          tablet: { src: GooseLogoText_2X, width: 1200, widthOnScreen: isVertical ? 78 : 11 },
          mobile: { src: GooseLogoText, width: 600, widthOnScreen: isVertical ? 58 : 21 },
        })}
        alt='App Logo Text'
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${({ isVertical }) => css`
    flex-direction: ${isVertical ? 'column' : 'row'};
    display: flex;
    align-items: center;
    gap: 8px;
  `}
`
