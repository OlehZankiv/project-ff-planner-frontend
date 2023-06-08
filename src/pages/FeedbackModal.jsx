import styled, { css } from 'styled-components'
import { Button, Modal, Ratings, Review, Textarea } from '../components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useReviews } from '../hooks/query/reviews/useReviews'

const FeedbackModal = ({ visible, setVisible }) => {
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

      <FeedbackList>
        {reviews.map((review) => (
          <Review {...review} key={review.id} style={{ border: 'none' }} />
        ))}
      </FeedbackList>
    </Modal>
  )
}

export default FeedbackModal

const FeedbackList = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    margin-top: 32px;
    padding: 16px;
    background-color: ${colors.feedbackListBackground};
    border-radius: 8px;
    max-height: 292px;
    overflow-y: auto;
  `}
`
