import styled from 'styled-components'
import { Button, Modal, Ratings, Textarea } from '../components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useUpdateReview } from '../hooks/query/'
import { toReview } from '../hooks/query/mappers'

export const FeedbackEditModal = ({ visible, setVisible, review }) => {
  const { t } = useTranslation()
  const { updateReview, isLoading } = useUpdateReview(() => setVisible(false))

  const [rating, setRating] = useState(review.rating)
  const [comment, setComment] = useState(review.comment)

  const feedbackSubmit = (event) => {
    event.preventDefault()

    updateReview(toReview({ _id: review.id, rating, comment }))
  }

  useEffect(() => {
    if (visible) {
      setRating(review.rating)
      setComment(review.comment)
    }
  }, [visible, review.rating, review.comment])

  return (
    <Modal visible={visible} onClose={() => setVisible(false)} onEnterPress={feedbackSubmit}>
      <Ratings value={rating} onInputValueChange={setRating} />
      <Textarea
        value={comment}
        style={{ marginTop: 24 }}
        label={t('Review')}
        onChange={(event) => setComment(event.target.value)}
      />
      <ButtonsWrapper>
        <Button
          style={{ marginRight: 8, borderRadius: 8 }}
          fullWidth
          type='submit'
          title={t('Edit')}
          onClick={feedbackSubmit}
          isLoading={isLoading}
        />
        <Button
          variant='secondary'
          fullWidth
          style={{ borderRadius: 8 }}
          title={t('Cancel')}
          onClick={() => setVisible(false)}
        />
      </ButtonsWrapper>
    </Modal>
  )
}

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 18px;
`
