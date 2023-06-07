import styled, { css } from 'styled-components'
import {
  getBreakpointsStyles,
  getDesktopStyles,
  getTabletStyles,
  useBreakpointValue,
} from '../styles/breakpoints.js'
import { Modal } from '../components'
import { useState } from 'react'
// import { useTranslation } from 'react-i18next'
import { StarIcon } from '../assets/icons'

// const colors = {
//   orange: 'FFAC33',
//   grey: 'CEC9C1',
// }

const FeedbackModal = ({}) => {
  //    const { t } = useTranslation()

  const [visible, setVisible] = useState(true)
  const [ratingValue, setRatingValue] = useState(0)
  const [ratingHoverValue, setRatingHoverValue] = useState(undefined)

  const value = useBreakpointValue({
    desktopValue: 'Welcome to Desktop',
    tabletValue: 'Welcome to Tablet',
    mobileValue: 'Welcome to Mobile',
  })

  const stars = Array(5).fill(0)

  const feedbackSubmit = () => {
    console.log('save button clicked')
  }

  const tempFeedback1 =
    'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.'
  const tempFeedback2 = 'This is test feedback 2'

  return (
    <Wrapper>
      {value}

      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        onEnterPress={() => setVisible(false)}
      >
        <div>
          <form style={styles.feedback_form}>
            <label htmlFor='rating' style={styles.label}>
              Rating
            </label>
            <div id='rating' style={styles.rating}>
              {stars.map((_, index) => {
                return (
                  <StarIcon
                    key={index}       
                    size={24}             
                    style={{ cursor: 'pointer', marginRight: '2px' }}
                    color={(ratingValue || ratingHoverValue) > index ? '#FFAC33' : '#CEC9C1'}
                    onClick={() => setRatingValue(() => index + 1)}
                    onMouseOver={() => setRatingHoverValue(() => index + 1)}
                    onMouseLeave={() => setRatingHoverValue(() => undefined)}
                  />
                )
              })}
            </div>
            <label htmlFor='feedback' style={styles.label}>
              Review
            </label>
            <textarea type='text' id='feedback' style={styles.textarea} placeholder='Enter text' />
            <button type='submit' onClick={feedbackSubmit} style={styles.button}>
              Save
            </button>
          </form>
          <div>
            <ul style={styles.feedback_list}>
              <li style={styles.feedback_list_item}>
                <div style={styles.feedback_avatar}>
                  <img src='./avatar.jpg' width='40' height='40' />
                </div>
                <div>
                  <p style={styles.p}>Nadiia Doe</p>
                  <div style={styles.feedback_rating}>
                    {stars.map((_, index) => {
                      return <StarIcon key={index} size={14} style={{ marginRight: 10 }} color={'#CEC9C1'}/>
                    })}
                  </div>
                  <div>{tempFeedback1}</div>
                </div>
              </li>
              <li style={styles.feedback_list_item}>
                <div style={styles.feedback_avatar}>
                  <img src='./avatar.jpg' width='40' height='40' />
                </div>
                <div>
                  <p style={styles.p}>Nadiia Doe</p>
                  <div style={styles.feedback_rating}>
                    {stars.map((_, index) => {
                      return <StarIcon key={index} size={14} style={{ marginRight: 10 }} color={'#CEC9C1'} />
                    })}
                  </div>
                  <div>{tempFeedback2}</div>
                </div>
              </li>
            </ul>
          </div>
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
    width: '404px',
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

  textarea: {
    height: '127px',
    backgroundColor: '#F6F6F6',
    borderRadius: '8px',
    border: '0px',
    padding: '14px 18px 14px 18px',
    marginBottom: '18px',
  },

  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    isolation: 'isolate',
    height: '48px',
    width: '100%',
    backgroundColor: '#3E85F3',
    color: '#FFFFFF',
    borderRadius: '8px',
    border: '0px',
  },

  feedback_list: {
    width: '404px',
    listStyle: 'none',
    padding: '16px',
    backgroundColor: '#E3F3FF',
    borderRadius: '8px',
    maxHeight: '292px',
  },

  feedback_list_item: {
    display: 'flex',
    flexDirection: 'raw',
    marginBottom: '20px',
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
