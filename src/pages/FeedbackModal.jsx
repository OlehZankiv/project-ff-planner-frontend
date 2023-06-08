import styled, { css } from 'styled-components'
import { Button, Modal, Ratings, Textarea } from '../components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RatingStarIcon } from '../assets/icons'

const FeedbackModal = ({ visible, setVisible }) => {
  const { t } = useTranslation()

  const [ratingValue, setRatingValue] = useState(0)
  const [reviewText, setReviewText] = useState('')

  const stars = Array(5).fill(0)

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
        <div>
          <div style={styles.feedback_avatar}>
            <img src='./avatar.jpg' width='40' height='40' />
          </div>
          <div>
            <p style={styles.p}>Nadiia Doe</p>
            <div style={styles.feedback_rating}>
              {stars.map((_, index) => {
                return (
                  <RatingStarIcon
                    key={index}
                    size={14}
                    style={{ marginRight: 10 }}
                    color={'#CEC9C1'}
                  />
                )
              })}
            </div>
            <div>
              GooseTrack is impressive, the calendar view and filter options make it easy to stay
              organized and focused. Highly recommended.
            </div>
          </div>
        </div>
        <div>
          <div style={styles.feedback_avatar}>
            <img src='./avatar.jpg' width='40' height='40' />
          </div>
          <div>
            <p style={styles.p}>Nadiia Doe</p>
            <div style={styles.feedback_rating}>
              {stars.map((_, index) => {
                return (
                  <RatingStarIcon
                    key={index}
                    size={14}
                    style={{ marginRight: 10 }}
                    color={'#CEC9C1'}
                  />
                )
              })}
            </div>
            <div>This is test feedback 2</div>
          </div>
        </div>
      </FeedbackList>
    </Modal>
  )
}

export default FeedbackModal

const styles = {
  feedback_form: {
    maxWidth: '404px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    marginBottom: '32px',
  },

  label: {
    marginBottom: '8px',
  },

  rating: {
    marginBottom: '24px',
  },

  feedback_avatar: {
    width: '40px',
    alignItems: 'top',
    marginRight: '12px',
  },

  p: {
    color: '#343434',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '18px',
    marginBottom: '8px',
  },

  feedback_rating: {
    marginBottom: '12px',
  },
}

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
