import styled, { css } from 'styled-components'
import { Button, Modal, Ratings, Review, Textarea } from '../components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useReviews } from '../hooks/query/reviews/useReviews'
import { getMobileStyles } from '../styles/breakpoints'

export const FeedbackModal = ({ visible, setVisible }) => {
  const { t } = useTranslation()

  const { reviews } = useReviews()

  const [ratingValue, setRatingValue] = useState(0)
  const [reviewText, setReviewText] = useState('')

  const feedbackSubmit = (event) => {
    event.preventDefault()

    const review = { rating: ratingValue, review: reviewText }
    console.log('form data:', review)
  }

  useEffect(() => {
    if (!visible) {
      setRatingValue(0)
      setReviewText('')
    }
  }, [visible])

  return (
    <Modal
      visible={visible}
      onClose={() => setVisible(false)}
      onEnterPress={() => setVisible(false)}
    >
      <Ratings value={ratingValue} onInputValueChange={setRatingValue} />
      <Textarea
        value={reviewText}
        style={{ marginTop: 24 }}
        label={t('Review')}
        placeholder={t('Enter text')}
        onChange={(event) => setReviewText(event.target.value)}
      />
      <Button
        fullWidth
        style={{ marginTop: 18, borderRadius: 8 }}
        type='submit'
        title={t('Save')}
        onClick={feedbackSubmit}
      />

      <FeedbackWrapper>
        <FeedbackList>
          {reviews.map((review) => (
            <Review {...review} key={review.id} style={{ border: 'none', padding: 0 }} />
          ))}
        </FeedbackList>
      </FeedbackWrapper>
    </Modal>
  )
}

const FeedbackWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    padding: 16px 4px;
    background-color: ${colors.feedbackListBackground};
    margin-top: 32px;
    border-radius: 8px;
  `}
`

const FeedbackList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 20px;
  padding: 0 12px;
  max-height: 292px;
  overflow-y: auto;
  ${getMobileStyles(css`
    row-gap: 14px;
  `)}
`
