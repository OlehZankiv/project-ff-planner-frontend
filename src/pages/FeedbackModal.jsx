import styled, { css } from 'styled-components'
import { Button, Modal, Ratings, Review, Textarea } from '../components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAddReview, useDeleteReview, useReviews } from '../hooks/query/'
import { getMobileStyles } from '../styles/breakpoints'
import { FeedbackEditModal } from './FeedbackEditModal'
import { toReview } from '../hooks/query/mappers'

export const FeedbackModal = ({ visible, setVisible }) => {
  const { t } = useTranslation()

  const { reviews } = useReviews('owner')
  const { addReview, isLoading } = useAddReview()
  const { deleteReview } = useDeleteReview()

  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [isFeedbackEditModalVisible, setFeedbackEditModalVisible] = useState(false)
  const [editedReview, setEditedReview] = useState('')

  const feedbackSubmit = (event) => {
    event.preventDefault()

    addReview(toReview({ rating, comment }))

    setRating(0)
    setComment('')
  }

  const handleEditFeedbackClick = (id) => {
    const review = reviews.find((r) => r.id === id)

    if (!review) return alert('review not found')

    setEditedReview(review)
    setFeedbackEditModalVisible(true)
  }

  useEffect(() => {
    if (!visible) {
      setRating(0)
      setComment('')
    }
  }, [visible])

  return (
    <>
      <FeedbackEditModal
        visible={isFeedbackEditModalVisible}
        setVisible={setFeedbackEditModalVisible}
        review={editedReview}
      />
      {!isFeedbackEditModalVisible && (
        <Modal
          visible={visible}
          onClose={() => setVisible(false)}
          onEnterPress={() => setVisible(false)}
        >
          <Ratings value={rating} onInputValueChange={setRating} />
          <Textarea
            value={comment}
            style={{ marginTop: 24 }}
            label={t('Review')}
            placeholder={t('Enter text')}
            onChange={(event) => setComment(event.target.value)}
          />
          <Button
            fullWidth
            style={{ marginTop: 18, borderRadius: 8 }}
            type='submit'
            title={t('Save')}
            isLoading={isLoading}
            onClick={feedbackSubmit}
          />

          {!!reviews.length && (
            <FeedbackWrapper>
              <FeedbackList>
                {reviews.map((review) => (
                  <Review
                    {...review}
                    key={review.id}
                    style={{ border: 'none', padding: 0 }}
                    showEdit
                    editOnClick={() => handleEditFeedbackClick(review.id)}
                    deleteOnClick={() => deleteReview(review.id)}
                  />
                ))}
              </FeedbackList>
            </FeedbackWrapper>
          )}
        </Modal>
      )}
    </>
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
  align-items: stretch;
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
