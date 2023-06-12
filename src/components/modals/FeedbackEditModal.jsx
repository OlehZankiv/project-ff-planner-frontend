import styled from 'styled-components'
import { Button, Modal, Ratings, Textarea } from '../index'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useUpdateReview } from '../../hooks/query'
import { feedbackFormSchema } from '../../utils/schemas'
import { Form, Formik } from 'formik'

export const FeedbackEditModal = ({ visible, setVisible, review }) => {
  const { t } = useTranslation()

  const formik = useRef(null)

  const { updateReview, isLoading } = useUpdateReview(() => {
    setVisible(false)
    formik.current?.resetForm()
  })

  const renderValues = [review.comment, review.id, review.rating]

  return (
    <Modal visible={visible} onClose={() => setVisible(false)}>
      <Formik
        key={JSON.stringify(renderValues)}
        innerRef={formik}
        initialValues={{ ...review }}
        onSubmit={updateReview}
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
            <ButtonsWrapper>
              <Button
                style={{ marginRight: 8, borderRadius: 8 }}
                fullWidth
                type='submit'
                title={t('Edit')}
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
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 18px;
`
