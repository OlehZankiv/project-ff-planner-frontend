import styled, { css, useTheme } from 'styled-components'

import { getBreakpointsStyles } from '../../styles/breakpoints'
import { AddIcon } from '../../assets/icons/AddIcon'

const Avatar = ({ image, size, plus, styles = {} }) => {
  const sizeMap = {
    avatar: {
      mobile: 72,
      tablet: 124,
      desktop: 124,
    },
    main: {
      mobile: 32,
      tablet: 44,
      desktop: 44,
    },
    toDo: {
      mobile: 32,
      tablet: 40,
      desktop: 40,
    },
  }

  const currentSize = sizeMap[size]

  const { colors } = useTheme()
  return (
    <ImageWrapper>
      <ImageAvatar
        mobileSize={currentSize.mobile}
        tabletSize={currentSize.tablet}
        desktopSize={currentSize.desktop}
        styles={styles}
        src={image}
      ></ImageAvatar>
      {plus ? (
        <BackgroundSvg>
          <AddIcon color={colors.white}></AddIcon>
        </BackgroundSvg>
      ) : null}
    </ImageWrapper>
  )
}
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ImageAvatar = styled.img`
  ${({ theme: { colors }, desktopSize, mobileSize, tabletSize, styles }) => css`
    border-radius: 50%;
    width: ${mobileSize}px;
    height: ${mobileSize}px;
    background-color: gray;
    border: 2px solid ${colors.primary};
    ${styles.mobile}

    ${getBreakpointsStyles({
      tablet: css`
        width: ${tabletSize}px;
        height: ${tabletSize}px;
        ${styles.tablet}
      `,
      desktop: css`
        width: ${desktopSize}px;
        height: ${desktopSize}px;
        ${styles.desktop}
      `,
    })}
  `}
`
export const BackgroundSvg = styled.a`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.primary};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    translate: -30px 22px;
    ${getBreakpointsStyles({
      tablet: css`
        width: 24px;
        height: 24px;
        translate: -50px 68px;
      `,
      desktop: css`
        width: 24px;
        height: 24px;
        translate: -50px 144px;
      `,
    })}
  `}
`
export const AddSvg = styled.svg`
  width: 14px;
  height: 14px;

  ${getBreakpointsStyles({
    tablet: css`
      width: 24px;
      height: 24px;
    `,
    desktop: css`
      width: 24px;
      height: 24px;
    `,
  })}
`
export default Avatar
