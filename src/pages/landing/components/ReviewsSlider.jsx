import styled, { css, useTheme } from 'styled-components'
import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from '../../../assets/icons'
import { useTranslation } from 'react-i18next'

import { getDesktopStyles } from '../../../styles/breakpoints'
import { useReviews } from '../../../hooks/query'
import { Review } from '../../../components/Review'

export const Reviews = () => {
  const { colors } = useTheme()
  const [currentReview, setCurrentReview] = useState(0)
  const { reviews } = useReviews('best')
  const { t } = useTranslation()

  const nextReview = () => {
    setCurrentReview(currentReview === reviews.length - 1 ? 0 : currentReview + 1)
  }

  const prevReview = () => {
    setCurrentReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1)
  }

  return (
    <Container>
      <ReviewsTitle>{t('Reviews')}</ReviewsTitle>

      <WrapperReviewContainer>
        {reviews
          .slice(currentReview, currentReview + (window.innerWidth >= 1440 ? 2 : 1))
          .map((review) => (
            <Review
              key={review._id}
              owner={review.owner.name}
              comment={review.comment}
              rating={review.rating}
            />
          ))}
      </WrapperReviewContainer>

      <ButtonContainer>
        <Button onClick={prevReview}>
          <ArrowLeft color={colors.black} />
        </Button>
        <Button onClick={nextReview}>
          <ArrowRight color={colors.black} />
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export const ReviewsTitle = styled.h2`
  ${({ theme }) => css`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${theme.colors.primary};

  ${getDesktopStyles(css`
    font-size: 40px;
    line-height: 44px;
  `)}
  }
  `}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;

  ${getDesktopStyles(css`
    margin-top: 100px;
  `)}
`

// Avatar src={review.avatar} alt={review.name}

// export const Avatar = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   object-fit: cover;
// `;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  padding: 18px 20px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`

export const WrapperReviewContainer = styled.div`
  max-width: 90vw;
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  ${getDesktopStyles(css`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    gap: 24px;
  `)}
`
