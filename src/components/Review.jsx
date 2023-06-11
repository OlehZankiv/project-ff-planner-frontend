import styled, { css, useTheme } from 'styled-components'
import { getMobileStyles, ScreenWrapper } from '../styles/breakpoints'
import { Text } from './Text'
import { RatingStarUserIcon, PencilIcon, TrashIcon } from '../assets/icons'
import { OpacityButton } from '../components'

export const Review = ({
  style,
  rating,
  comment,
  owner: { name },
  showEdit = false,
  editOnClick,
  deleteOnClick,
}) => {
  const { colors } = useTheme()

  const commentJSX = (
    <Text type='p' style={{ marginTop: 24 }}>
      {comment}
    </Text>
  )

  return (
    <Wrapper style={style}>
      <div style={{ width: 50, height: 50, backgroundColor: 'red' }} />
      <div style={{width: '100%'}}>
        <ReviewTop>
          <Text type='h5'>{name}</Text>
          {showEdit && (
            <EditWrapper>
              <OpacityButton onClick={editOnClick}>
                <PencilIcon color={colors.text} />
              </OpacityButton>
              <OpacityButton onClick={deleteOnClick}>
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
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    padding: 32px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    column-gap: 8px;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid ${colors.reviewBorder};
    width: 100%;
    ${getMobileStyles(css`
      padding: 24px;
    `)}
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
