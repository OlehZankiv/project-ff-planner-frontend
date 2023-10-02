import styled, { css, useTheme } from 'styled-components'
import { getBreakpointsStyles } from '../../styles/breakpoints'
import { Button, DatePicker, Spinner, Text } from '../../components'
import { Form, Formik } from 'formik'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { productivityValidationFormSchema } from '../../utils/schemas'
import { useAuthContext } from '../../contexts/auth'
import { useProductivityRequest } from '../../hooks'
import dayjs from 'dayjs'

export const ProductivityPage = () => {
  const { colors } = useTheme()
  const { t } = useTranslation()
  const { logger, isLoading: isLoggerLoading } = useAuthContext()

  const { isLoading: isProductivityCalculating, calculateProductivity } = useProductivityRequest()

  const formik = useRef(null)

  useEffect(() => {
    if (!logger) return
    formik.current?.resetForm({ values: logger })
  }, [logger])

  useEffect(() => {
    calculateProductivity(logger)
  }, [])

  useEffect(() => {
    const a = [
      {
        startAt: 1677360000000,
        deadline: 1677370800000,
        finishedAt: 1677381600000,
        title: 'Website redesign',
        priority: 'high',
        category: 'done',
      },
      {
        startAt: 1677446400000,
        deadline: 1677457200000,
        finishedAt: 1677468000000,
        title: 'Client follow-up call',
        priority: 'medium',
        category: 'done',
      },
      {
        startAt: 1677532800000,
        deadline: 1677543600000,
        finishedAt: 1677554400000,
        title: 'Project documentation',
        priority: 'high',
        category: 'done',
      },
      {
        startAt: 1677619200000,
        deadline: 1677630000000,
        finishedAt: 1677640800000,
        title: 'Product launch event',
        priority: 'high',
        category: 'done',
      },
      {
        startAt: 1677705600000,
        deadline: 1677716400000,
        finishedAt: 1677727200000,
        title: 'Client satisfaction survey',
        priority: 'medium',
        category: 'done',
      },
    ]

    console.log(
      a
        .map(({ deadline, ...task }) => {
          let endAt = new Date(
            dayjs(new Date(task.startAt)).get('days') < dayjs(new Date(deadline)).get('days')
              ? dayjs(new Date(task.startAt)).endOf('day').toDate().getTime()
              : deadline,
          )
          endAt.setMonth(9)
          endAt.setFullYear(2023)

          endAt = endAt.getTime()

          let startAt = new Date(task.startAt)
          startAt.setMonth(9)
          startAt.setFullYear(2023)

          startAt = startAt.getTime()

          let finishedAt = new Date(task.finishedAt)
          finishedAt.setMonth(9)
          finishedAt.setFullYear(2023)

          finishedAt = finishedAt.getTime()

          if (new Date(endAt).getHours() <= 3) endAt += 1000 * 60 * 60 * 5
          if (new Date(startAt).getHours() <= 3) startAt += 1000 * 60 * 60 * 3

          return {
            ...task,
            startAt,
            endAt,
            finishedAt,
            category: task.finishedAt ? 'done' : task.category === 'done' ? 'to-do' : task.category,
            assignedUserId: '6480e95ec57b875c6fbb0f65',
          }
        })
        .map(JSON.stringify),
    )
  }, [])

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
        onSubmit={calculateProductivity}
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

            <div>
              <Text style={{ textAlign: 'center' }} type='h2' fontSize={32}>
                {t('Coefficient of Productivity')}
              </Text>
              <ProductivityNumberWrapper>
                {isLoggerLoading ? (
                  <Spinner size={64} color={colors.linkHover} />
                ) : (
                  <Text type='h1' fontSize={82} lineHeight={64} color='linkHover'>
                    {logger.productivity}
                  </Text>
                )}
              </ProductivityNumberWrapper>
            </div>

            <Button
              buttonTextProps={{ lineHeight: 18, fontSize: 14 }}
              type='submit'
              fullWidth
              title={t('Save changes')}
              variant='primary'
              disabled={
                Object.values(errors).length ||
                Object.entries(values).every(([key, value]) => value === logger?.[key]) ||
                isProductivityCalculating
              }
              isLoading={isProductivityCalculating}
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
const ProductivityNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
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
