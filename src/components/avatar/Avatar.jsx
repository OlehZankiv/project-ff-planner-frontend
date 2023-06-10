import styled, { css, useTheme } from 'styled-components'
import { useAuthContext } from '../../contexts/auth'
import { getBreakpointsStyles, useBreakpointValue } from '../../styles/breakpoints'
import { AddIcon } from '../../assets/icons/AddIcon'
import { firstLettersMaker } from '../../utils/text'
import { Text } from '../Text'

const Avatar = ({ type, plus, styles = {}, onPlusHandler }) => {
  const sizeMap = {
    profile: {
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
  const nameFontSize = useBreakpointValue({
    mobileValue: 14,
    tabletValue: 18,
    desktopValue: 18,
  })
  const currentSize = sizeMap[type]
  const { logger } = useAuthContext()
  const { colors } = useTheme()

  if (!logger) return null

  const userName = logger.name

  console.log(currentSize.desktop, type)
  return (
    <ImageWrapper
      data-component='avatar'
      mobileSize={currentSize.mobile}
      tabletSize={currentSize.tablet}
      desktopSize={currentSize.desktop}
    >
      <AvatarWrapper
        mobileSize={currentSize.mobile}
        tabletSize={currentSize.tablet}
        desktopSize={currentSize.desktop}
        styles={styles}
      >
        {logger.avatarURL ? (
          <img src={logger.avatarURL} />
        ) : (
          <Text
            type='p'
            color='userNameText'
            fontWeight={1000}
            fontSize={nameFontSize}
            style={{ textAlign: 'center' }}
          >
            {firstLettersMaker(userName)}
          </Text>
        )}
      </AvatarWrapper>
      {plus ? (
        <BackgroundSvg onClick={onPlusHandler}>
          <AddIcon color={colors.white}></AddIcon>
        </BackgroundSvg>
      ) : null}
    </ImageWrapper>
  )
}
export const ImageWrapper = styled.div`
  ${({ desktopSize, mobileSize, tabletSize }) => css`
    display: flex;
    position: relative;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 60px;

    width: ${mobileSize}px;
    height: ${mobileSize}px;

    ${getBreakpointsStyles({
      tablet: css`
        width: ${tabletSize}px;
        height: ${tabletSize}px;
      `,
      desktop: css`
        width: ${desktopSize}px;
        height: ${desktopSize}px;
      `,
    })}
  `}
`

export const AvatarWrapper = styled.div`
  ${({ theme: { colors }, desktopSize, mobileSize, tabletSize, styles }) => css`
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    width: ${mobileSize}px;
    height: ${mobileSize}px;
    border: 2px solid ${colors.primary};
    background-color: ${colors.avatarBackgroundColor};
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
    position: absolute;
    right: 18px;
    top: 21px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${getBreakpointsStyles({
      tablet: css`
        width: 24px;
        height: 24px;
        right: 30px;
        top: 66px;
      `,
      desktop: css`
        width: 24px;
        height: 24px;
        right: 22px;
        top: 145px;
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
