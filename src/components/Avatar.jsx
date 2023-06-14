import styled, { css } from 'styled-components'
import { Text } from './Text'
import { PlusIcon } from '../assets/icons'
import { getMobileStyles, useBreakpointValue } from '../styles/breakpoints'
import { OpacityButton } from './buttons/OpacityButton'

export const Avatar = ({
  selectedAvatar,
  style,
  image,
  size = 40,
  name,
  withUpload,
  onAvatarPick,
}) => {
  const initials =
    name
      ?.split(' ')
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join('') ?? ''

  const plusIconSize = useBreakpointValue({ desktopValue: 18, tabletValue: 18, mobileValue: 12 })

  const contentJSX = (
    <Wrapper size={size} style={style}>
      {image || selectedAvatar ? (
        <AvatarImage
          src={selectedAvatar ? URL.createObjectURL(selectedAvatar) : image}
          alt='Avatar'
        />
      ) : (
        <Text fontSize={(size / 100) * 48} type='h2' color='primary'>
          {initials}
        </Text>
      )}
      {withUpload && (
        <PlusWrapper>
          <PlusIcon size={plusIconSize} />
        </PlusWrapper>
      )}
    </Wrapper>
  )

  return withUpload ? (
    <OpacityButton>
      <UploadInputLabel htmlFor='avatar-file'>
        <UploadInput
          type='file'
          id='avatar-file'
          accept='image/png, image/gif, image/jpeg'
          onChange={(e) => {
            const file = e.target.files?.[0]

            if (!file) return

            onAvatarPick?.(file)
          }}
        />
        {contentJSX}
      </UploadInputLabel>
    </OpacityButton>
  ) : (
    contentJSX
  )
}

const Wrapper = styled.div`
  ${({ theme: { colors }, size }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${size}px;
    height: ${size}px;
    background-color: ${colors.secondaryBackground};
    border: 2px solid ${colors.primary};
    border-radius: 50%;
  `}
`

const UploadInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const UploadInputLabel = styled.label`
  cursor: pointer;
`

const AvatarImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const PlusWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    position: absolute;
    bottom: -6px;
    right: 24px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${colors.primary};

    ${getMobileStyles(css`
      width: 14px;
      height: 14px;
      bottom: -4px;
      right: 14px;
    `)}

    path {
      stroke: ${colors.white};
    }
  `}
`
