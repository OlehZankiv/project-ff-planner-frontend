import styled, { useTheme } from 'styled-components'
import { useState } from 'react'
import { StarIcon } from '../../assets/icons'
import { Text } from '../'

export const Ratings = ({ onInputValueChange }) => {
  const { colors } = useTheme()

  const [ratingValue, setRatingValue] = useState(0)
  const [ratingHoverValue, setRatingHoverValue] = useState(undefined)

  const handleRatingClick = (value) => {
    setRatingValue(value)
    onInputValueChange(value)
  }

  const stars = Array(5).fill(0)

  return (
    <RatingsWrapper>
      <Label>
        <Text type='p' fontSize={12} lineHeight={14} color='#343434'>
          Rating
        </Text>
      </Label>

      {stars.map((_, index) => {
        return (
          <StarIcon
            key={index}
            size={24}
            color={
              (ratingValue || ratingHoverValue) > index ? colors.starActive : colors.starDefault
            }
            onClick={() => handleRatingClick(index + 1)}
            onMouseOver={() => setRatingHoverValue(() => index + 1)}
            onMouseLeave={() => setRatingHoverValue(() => undefined)}
          />
        )
      })}
    </RatingsWrapper>
  )
}

const RatingsWrapper = styled.div`
  margin-bottom: 24px;
`
const Label = styled.div`
  margin-bottom: 8px;
`
