import styled, { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import { RatingStarIcon } from '../../assets/icons'
import { OpacityButton, Text } from '../'
import { useTranslation } from 'react-i18next'

export const Ratings = ({ value = 0, onInputValueChange, style }) => {
  const { t } = useTranslation()
  const { colors } = useTheme()

  const [ratingValue, setRatingValue] = useState(value)
  useEffect(() => setRatingValue(value), [value])

  const [ratingHoverValue, setRatingHoverValue] = useState(undefined)

  const handleRatingClick = (value) => {
    setRatingValue(value)
    onInputValueChange(value)
  }

  const stars = Array(5).fill(0)

  return (
    <Wrapper style={style}>
      <Text type='p' fontSize={12} lineHeight={14} color='feedbackModalLabels'>
        {t('Rating')}
      </Text>
      <RatingsWrapper>
        {stars.map((_, index) => (
          <OpacityButton
            key={index}
            onMouseOver={() => setRatingHoverValue(() => index + 1)}
            onMouseLeave={() => setRatingHoverValue(() => undefined)}
            onClick={() => handleRatingClick(index + 1)}
          >
            <RatingStarIcon
              size={24}
              color={
                (ratingHoverValue || ratingValue) > index ? colors.starActive : colors.starDefault
              }
            />
          </OpacityButton>
        ))}
      </RatingsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const RatingsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
  margin-top: 8px;
`
