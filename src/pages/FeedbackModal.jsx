import styled, { css } from 'styled-components'
import { Button, Modal, Ratings, Review, Textarea } from '../components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useReviews } from '../hooks/query/'
import { getMobileStyles } from '../styles/breakpoints'
import { FeedbackEditModal } from './FeedbackEditModal'

export const FeedbackModal = ({ visible, setVisible }) => {
  const { t } = useTranslation()

  const { reviews } = useReviews('owner')

  const [ratingValue, setRatingValue] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const [isFeedbackEditModalVisible, setFeedbackEditModalVisible] = useState(false)
  const [editReview, setReview] = useState('')

  const feedbackSubmit = (event) => {
    event.preventDefault()

    const review = { rating: ratingValue, review: reviewText }
    console.log('form data to send:', review)

    setRatingValue(0)
    setReviewText('')
  }

  const handleEditFeedbackClick = (id) => {
    const review = reviews.find((r) => r.id === id)

    if (!review) {
      return alert('review not found')
    }
    setReview(review)
    setFeedbackEditModalVisible(true)
  }

  const handleDeleteFeedbackClick = (id) => {
    console.log('req to delete review with id ', id)
  }

  useEffect(() => {
    if (!visible) {
      setRatingValue(0)
      setReviewText('')
    }
  }, [visible])

  if (isFeedbackEditModalVisible) {
    return (
      <FeedbackEditModal
        visible={isFeedbackEditModalVisible}
        setVisible={setFeedbackEditModalVisible}
        review={editReview}
      />
    )
  }

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
            <Review
              {...review}
              key={review.id}
              style={{ border: 'none', padding: 0 }}
              showEdit={true}
              editOnClick={() => handleEditFeedbackClick(review.id)}
              deleteOnClick={() => handleDeleteFeedbackClick(review.id)}
            />
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
