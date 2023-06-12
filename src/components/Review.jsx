import styled, { css, useTheme } from 'styled-components'
import { getMobileStyles, ScreenWrapper } from '../styles/breakpoints'
import { Text } from './Text'
import { PencilIcon, RatingStarUserIcon, TrashIcon } from '../assets/icons'
import { Avatar, OpacityButton } from '../components'
import { useState } from 'react'

export const Review = ({
  style,
  rating,
  comment,
  owner: { name, avatarURL },
  showEdit = false,
  editOnClick,
  deleteOnClick,
}) => {
  const [isFullView, setFullView] = useState(false)

  const { colors } = useTheme()

  const commentJSX = (
    <DescriptionWrapper isFullView={isFullView}>
      <Text type='p'>{comment}</Text>
    </DescriptionWrapper>
  )

  const withStopPropagation = (callback) => (e) => {
    e.stopPropagation()
    callback()
  }

  return (
    <Wrapper style={style} onClick={() => setFullView((prev) => !prev)}>
      <Avatar size={50} name={name} image={avatarURL} />
      <InfoWrapper>
        <ReviewTop>
          <Text type='h5'>{name}</Text>
          {showEdit && (
            <EditWrapper>
              <OpacityButton onClick={withStopPropagation(editOnClick)}>
                <PencilIcon color={colors.text} />
              </OpacityButton>
              <OpacityButton onClick={withStopPropagation(deleteOnClick)}>
                <TrashIcon color={colors.text} />
              </OpacityButton>
            </EditWrapper>
          )}
        </ReviewTop>
        <StarsWrapper style={{ marginTop: 12 }}>
          {new Array(5).fill(0).map((_, index) => (
            <RatingStarUserIcon
              key={index}
              size={16}
              color={rating > index ? colors.starActive : colors.starDefault}
            />
          ))}
        </StarsWrapper>
        <ScreenWrapper tablet={commentJSX} desktop={commentJSX} />
        <ScreenWrapper mobile={commentJSX} />
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(OpacityButton)`
  ${({ theme: { colors } }) => css`
    padding: 32px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    column-gap: 14px;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid ${colors.reviewBorder};
    width: 100%;
    ${getMobileStyles(css`
      padding: 24px;
    `)}
  `}
`

const InfoWrapper = styled.div`
  flex: 1;
  max-width: calc(100% - 64px);
`

const DescriptionWrapper = styled.div`
  ${({ isFullView }) => css`
    margin-top: 24px;
    word-break: break-word;
    ${!isFullView &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
  `}
`

const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-top: 12px;
`

const ReviewTop = styled.div`
  display: flex;
  justify-content: space-between;
`

const EditWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`
