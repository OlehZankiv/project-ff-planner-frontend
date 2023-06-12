import styled, { useTheme } from 'styled-components'
import { useState } from 'react'
import { RatingStarIcon } from '../../assets/icons'
import { OpacityButton, Text } from '../'
import { useTranslation } from 'react-i18next'
import { useField } from 'formik'

export const Ratings = ({ name, style, errorMessage, isError }) => {
  const { t } = useTranslation()
  const { colors } = useTheme()

  const [, { value: ratingValue }, { setValue: setRatingValue }] = useField(name)

  const [ratingHoverValue, setRatingHoverValue] = useState(undefined)

  const stars = Array(5).fill(0)

  const inputColor = isError ? 'error' : 'feedbackModalLabels'

  return (
    <Wrapper style={style}>
      <Text type='p' fontSize={12} lineHeight={14} color={inputColor}>
        {t('Rating')}
      </Text>
      <RatingsWrapper>
        {stars.map((_, index) => (
          <OpacityButton
            key={index}
            onMouseOver={() => setRatingHoverValue(() => index + 1)}
            onMouseLeave={() => setRatingHoverValue(() => undefined)}
            onClick={() => setRatingValue(index + 1)}
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
      {isError && !!errorMessage && (
        <HintMessageWrapper>
          <Text type='p' color={inputColor} fontWeight={400} fontSize={14} lineHeight={18}>
            {errorMessage}
          </Text>
        </HintMessageWrapper>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const RatingsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
  margin-top: 8px;
`

const HintMessageWrapper = styled.div`
  position: absolute;
  transform: translateY(100%);
  bottom: -2px;
  left: 18px;
`
