import styled, { css, useTheme } from 'styled-components'
import { getBreakpointsStyles, getDesktopStyles, getTabletStyles } from '../styles/breakpoints.js'
import { Modal, Button, Textarea, Ratings } from '../components'
// import { Textarea, Ratings } from '../components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StarIcon } from '../assets/icons'

const FeedbackModal = ({}) => {
  const { t } = useTranslation()

  const { colors } = useTheme()
  console.log(colors)

  const [visible, setVisible] = useState(true)
  const [ratingValue, setRatingValue] = useState(0)
  const [reviewText, setReviewText] = useState(undefined)

  const stars = Array(5).fill(0)

  const feedbackSubmit = (event) => {
    event.preventDefault()

    const review = { rating: ratingValue, review: reviewText }
    console.log('form data:', review)
  }

  const tempFeedback1 =
    'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.'
  const tempFeedback2 = 'This is test feedback 2'

  return (
    <Wrapper>
      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        onEnterPress={() => setVisible(false)}
      >
        <div>
          <form style={styles.feedback_form}>
            <Ratings onInputValueChange={(value) => setRatingValue(value)} />
            <Textarea
              label={t('Review')}
              placeholder={t('Enter text')}
              onChange={(event) => setReviewText(event.target.value)}
            />
            <Button type={'submit'} fullWidth title={t('Save')} onClick={feedbackSubmit} />
          </form>
          <FeedbackList>
            <ul>
              <li>
                <div style={styles.feedback_avatar}>
                  <img src='./avatar.jpg' width='40' height='40' />
                </div>
                <div>
                  <p style={styles.p}>Nadiia Doe</p>
                  <div style={styles.feedback_rating}>
                    {stars.map((_, index) => {
                      return (
                        <StarIcon
                          key={index}
                          size={14}
                          style={{ marginRight: 10 }}
                          color={'#CEC9C1'}
                        />
                      )
                    })}
                  </div>
                  <div>{tempFeedback1}</div>
                </div>
              </li>
              <li>
                <div style={styles.feedback_avatar}>
                  <img src='./avatar.jpg' width='40' height='40' />
                </div>
                <div>
                  <p style={styles.p}>Nadiia Doe</p>
                  <div style={styles.feedback_rating}>
                    {stars.map((_, index) => {
                      return (
                        <StarIcon
                          key={index}
                          size={14}
                          style={{ marginRight: 10 }}
                          color={'#CEC9C1'}
                        />
                      )
                    })}
                  </div>
                  <div>{tempFeedback2}</div>
                </div>
              </li>
            </ul>
          </FeedbackList>
        </div>
      </Modal>

      <button onClick={() => setVisible(true)}>Feedback</button>
    </Wrapper>
  )
}

export default FeedbackModal

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  color: white;

  ${getBreakpointsStyles({
    desktop: css`
      background-color: blue;
    `,
    tablet: css`
      background-color: green;
    `,
  })}

  // The same as getBreakpointsStyles
  ${getDesktopStyles(css`
    background-color: blue;
  `)}
  ${getTabletStyles(css`
    background-color: green;
  `)}
`

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

const FeedbackList = styled.ul`
  max-width: 404px;
  list-style: none;
  padding: 16px;
  background-color: #e3f3ff;
  border-radius: 8px;
  max-height: 292px;

  li {
    display: flex;
    flex-direction: raw;
    margin-bottom: 20px;
  }
`
