import styled from 'styled-components'
import { Modal, Ratings, Textarea, Button } from '../components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useUpdateReview } from '../hooks/query/'

export const FeedbackEditModal = ({ visible, setVisible, review }) => {
  const { t } = useTranslation()
  const { updateReview } = useUpdateReview()

  const [ratingValue, setRatingValue] = useState(review.rating)
  const [reviewText, setReviewText] = useState(review.comment)

  const feedbackSubmit = (event) => {
    event.preventDefault()

    const newReview = { id: review.id, rating: ratingValue, comment: reviewText }

    updateReview(newReview)

    setVisible(false)
  }

  useEffect(() => {
    if (visible) {
      setRatingValue(review.rating)
      setReviewText(review.comment)
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
        onChange={(event) => setReviewText(event.target.value)}
      />
      <ButtonsWrapper>
        <Button
          style={{ marginTop: 18, marginRight: 8, borderRadius: 8, width: 198 }}
          type='submit'
          title={t('Edit')}
          onClick={feedbackSubmit}
        />
        <Button
          variant='secondary'
          style={{ marginTop: 18, borderRadius: 8, width: 198 }}
          title={t('Cancel')}
          onClick={() => setVisible(false)}
        />
      </ButtonsWrapper>
    </Modal>
  )
}

const ButtonsWrapper = styled.div`
  display: flex;
`
