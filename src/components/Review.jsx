import styled, { css, useTheme } from 'styled-components'
import { getMobileStyles, ScreenWrapper } from '../styles/breakpoints'
import { Text } from './Text'
import { RatingStarUserIcon } from '../assets/icons'

export const Review = ({ style, rating, comment, owner: { name } }) => {
  const { colors } = useTheme()

  const commentJSX = (
    <Text type='p' style={{ marginTop: 24 }}>
      {comment}
    </Text>
  )

  return (
    <Wrapper style={style}>
      <div style={{ width: 50, height: 50, backgroundColor: 'red' }} />
      <div>
        <Text type='h5'>{name}</Text>
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
