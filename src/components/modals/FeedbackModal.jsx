import styled, { css } from 'styled-components'
import { Button, Modal, Ratings, Review, Textarea } from '../index'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAddReview, useReviews } from '../../hooks/query'
import { getMobileStyles } from '../../styles/breakpoints'
import { Form, Formik } from 'formik'
import { feedbackFormSchema } from '../../utils/schemas'
import { FeedbackEditModal } from './FeedbackEditModal'
import { DeleteModal } from './DeleteModal'

const initialValues = {
  rating: 0,
  comment: '',
}

export const FeedbackModal = ({ visible, setVisible }) => {
  const { t } = useTranslation()
  const formik = useRef(null)

  const { reviews } = useReviews('owner')
  const { addReview, isLoading } = useAddReview(formik.current?.resetForm)

  const [isFeedbackEditModalVisible, setFeedbackEditModalVisible] = useState(false)
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false)
  const [editedReview, setEditedReview] = useState('')
  const [deletedReview, setDeleteReview] = useState('')

  const handleEditFeedbackClick = (id) => {
    const review = reviews.find((r) => r.id === id)

    if (!review) return alert('review not found')
    setDeleteModalVisible(false)
    setEditedReview(review)
    setFeedbackEditModalVisible(true)
    setVisible(false)
  }

  const handleDeleteFeedbackClick = (id) => {
    const review = reviews.find((r) => r.id === id)

    if (!review) return alert('review not found')
    setDeleteModalVisible(true);
    setVisible(false)
    setDeleteReview(review)
  }

  useEffect(() => {
    if (!visible) formik.current?.resetForm()
  }, [visible])

  return (
    <>
      <FeedbackEditModal
        visible={isFeedbackEditModalVisible}
        setVisible={setFeedbackEditModalVisible}
        review={editedReview}
      />
      <DeleteModal
        title={t('Confirm the deletion')}
        visible={isDeleteModalVisible}
        setDeleteVisible={setDeleteModalVisible}
        setVisible={setVisible}
        review={deletedReview}
      />
      
      {!isFeedbackEditModalVisible && (
        <Modal
          visible={visible}
          onClose={() => setVisible(false)}
          onEnterPress={() => setVisible(false)}
        >
          <Formik
            innerRef={formik}
            initialValues={initialValues}
            onSubmit={addReview}
            validationSchema={feedbackFormSchema}
          >
            {({ errors, touched }) => (
              <Form autoComplete='off'>
                <Ratings
                  name='rating'
                  errorMessage={t(errors.rating)}
                  isError={errors.rating && touched.rating}
                />
                <Textarea
                  name='comment'
                  style={{ marginTop: 24 }}
                  label={t('Review')}
                  placeholder={t('Enter text')}
                  errorMessage={t(errors.comment)}
                  isError={errors.comment && touched.comment}
                />
                <Button
                  fullWidth
                  style={{ marginTop: 24, borderRadius: 8 }}
                  type='submit'
                  title={t('Save')}
                  isLoading={isLoading}
                />
              </Form>
            )}
          </Formik>

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
                    deleteOnClick={() => handleDeleteFeedbackClick(review.id)}
                  />
                ))}
              </FeedbackList>
            </FeedbackWrapper>
          )}
        </Modal>
      )}

            {/* {(!isDeleteModalVisible && isFeedbackEditModalVisible) && (
        <Modal
          visible={visible}
          onClose={() => setVisible(false)}
          onEnterPress={() => setVisible(false)}
        >
        </Modal> */}
      {/* )} */}
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
