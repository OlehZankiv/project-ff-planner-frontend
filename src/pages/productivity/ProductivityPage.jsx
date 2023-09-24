import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../../styles/breakpoints'
import { Button, DatePicker, Text } from '../../components'
import { Form, Formik } from 'formik'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { productivityValidationFormSchema } from '../../utils/schemas'
import { useAuthContext } from '../../contexts/auth'
import { useUpdateUser } from '../../hooks/query'
import * as tf from '@tensorflow/tfjs'
import { handleRequestSuccess } from '../../utils/notifications'

export const ProductivityPage = () => {
  const { t } = useTranslation()
  const { logger } = useAuthContext()
  const { updateUser, isLoading } = useUpdateUser(() =>
    handleRequestSuccess(t('Data was updated successfully')),
  )
  const formik = useRef(null)

  useEffect(() => {
    // Створення моделі лінійної регресії
    const model = tf.sequential()
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }))
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' })

    // Навчання моделі на даних
    const xs = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 1])
    const ys = tf.tensor2d([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [10, 1])

    model.fit(xs, ys, { epochs: 500 }).then(() => {
      // Використання навченої моделі для передбачення
      const result = model.predict(tf.tensor2d([10, 20, 30], [3, 1]))
      result.print()
    })
  }, [])

  useEffect(() => {
    if (!logger) return
    formik.current?.resetForm({ values: logger })
  }, [logger])

  if (!logger) return null

  return (
    <Wrapper>
      <Text type='h2'>{t('Select Dates')}</Text>
      <Text type='p' style={{ marginTop: 24 }}>
        {t('The data will be used for the formula of the productivity coefficient.')}
      </Text>
      <Text type='p' style={{ marginTop: 8 }}>
        {t(
          'For the correct value try to use dates which has more then 10 tasks between each other.',
        )}
      </Text>
      <Formik
        innerRef={formik}
        initialValues={{ startDate: logger.startDate, endDate: logger.endDate }}
        onSubmit={updateUser}
        validationSchema={productivityValidationFormSchema}
      >
        {({ errors, touched, values }) => (
          <ProductivityForm autoComplete='off'>
            <FormFields>
              <DatePicker
                name='startDate'
                title={t('Start date')}
                placeholder={t('Enter time')}
                errorMessage={t(errors.startDate)}
                successMessage={t('This is a CORRECT start date')}
                isError={errors.birthday && touched.birthday}
              />
              <DatePicker
                name='endDate'
                title={t('End date')}
                placeholder={t('Enter time')}
                errorMessage={t(errors.endDate)}
                successMessage={t('This is a CORRECT end date')}
                isError={errors.birthday && touched.birthday}
              />
            </FormFields>

            <Button
              buttonTextProps={{ lineHeight: 18, fontSize: 14 }}
              type='submit'
              fullWidth
              title={t('Save changes')}
              variant='primary'
              disabled={
                Object.values(errors).length ||
                Object.entries(values).every(([key, value]) => value === logger?.[key]) ||
                isLoading
              }
              isLoading={isLoading}
            />
          </ProductivityForm>
        )}
      </Formik>
    </Wrapper>
  )
}

export default ProductivityPage

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${colors.content};
    border-radius: 16px;
    padding: 60px 11vw;
    ${getBreakpointsStyles({
      tablet: css`
        padding: 40px 23vw;
      `,
      mobile: css`
        padding: 40px 18px;
      `,
    })}
  `}
`

const ProductivityForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  justify-content: space-between;
`

const FormFields = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 64px;
  gap: 8px 24px;

  & > * {
    width: calc(50% - 12px);
  }
`