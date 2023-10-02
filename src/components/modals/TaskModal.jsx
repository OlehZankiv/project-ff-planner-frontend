import { useEffect, useRef } from 'react'
import { Button, Input, Modal, Text, TimePicker } from '../index'
import styled, { useTheme } from 'styled-components'
import { PencilIcon, PlusIcon, SunIcon } from '../../assets/icons'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import { RadioButtons } from '../fields/RadioButtons'
import { Form, Formik } from 'formik'
import { createTaskFormSchema } from '../../utils/schemas'
import { useCreateTask, useUpdateTask } from '../../hooks/query'
import { useAnalyzePerformance } from '../../hooks'
import { toTask } from '../../hooks/query/mappers'

const defaultValues = {
  startAt: new Date(),
  endAt: dayjs(new Date()).add(1, 'day').toDate(),
  title: '',
  priority: 'low',
  category: 'to-do',
}

export const TaskModal = ({ selectedDate, category, updateValues, visible, setVisible }) => {
  const { t } = useTranslation()
  const formik = useRef(null)

  const onClose = () => {
    setVisible(false)

    formik.current?.resetForm({ values: initialValues })
  }

  const {
    handleAnalyze,
    analyzeInfo,
    isLoading: isAnalyzeTaskLoading,
    reset,
  } = useAnalyzePerformance()
  const { createTask, isLoading: isCreateTaskLoading } = useCreateTask(onClose)
  const { updateTask, isLoading: isUpdateTaskLoading } = useUpdateTask(updateValues?.id, onClose)

  const isLoading = isCreateTaskLoading || isUpdateTaskLoading

  const { colors } = useTheme()

  const initialValues = {
    ...defaultValues,
    category,
    startAt: selectedDate,
    endAt: dayjs(selectedDate).add(1, 'hour').toDate(),
    ...updateValues,
  }

  useEffect(() => {
    formik.current?.resetForm({ values: initialValues })
  }, [JSON.stringify(initialValues)])

  useEffect(() => {
    if (!visible && analyzeInfo) reset()
  }, [visible, analyzeInfo])

  return (
    <Modal visible={visible} onClose={onClose}>
      <Formik
        innerRef={formik}
        initialValues={initialValues}
        validationSchema={createTaskFormSchema}
        onSubmit={updateValues ? updateTask : createTask}
      >
        {({ errors, setErrors, isValid, validateForm, values }) => (
          <Form autoComplete='off'>
            <Input
              name='title'
              title={t('Title')}
              placeholder={t('Enter title')}
              errorMessage={t(errors.title)}
              successMessage={t('This is a CORRECT title')}
              isError={errors.title}
              resetState={visible}
            />
            <TimeInputsWrapper>
              <TimePicker
                resetState={visible}
                name='startAt'
                title={t('Start')}
                placeholder={t('Enter time')}
                errorMessage={t(errors.startAt)}
                successMessage={t('This is a CORRECT time')}
                isError={errors.startAt}
              />
              <TimePicker
                resetState={visible}
                name='endAt'
                title={t('End')}
                placeholder={t('Enter time')}
                errorMessage={t(errors.endAt)}
                successMessage={t('This is a CORRECT time')}
                isError={errors.endAt}
                minTime={dayjs(values.startAt).set('hour', dayjs(values.startAt).get('hour'))}
              />
            </TimeInputsWrapper>

            <RadioButtons
              style={{ marginTop: 28 }}
              name='priority'
              items={[
                { label: t('Low'), color: colors.low, value: 'low' },
                { label: t('Medium'), color: colors.medium, value: 'medium' },
                { label: t('High'), color: colors.high, value: 'high' },
              ]}
            />

            {analyzeInfo !== null && <AnalyzedInfoView analyzeInfo={analyzeInfo} />}

            {category !== 'done' && !analyzeInfo && (
              <Button
                style={{ borderRadius: 8, marginTop: 48 }}
                fullWidth
                variant='primary'
                title={t('Performance Analysis')}
                type='button'
                onClick={() =>
                  validateForm(values).then((res) => {
                    if (Object.values(res).length) setErrors(res)
                    else handleAnalyze(toTask(values))
                  })
                }
                disabled={!isValid}
                isLoading={isAnalyzeTaskLoading}
                leftIcon={<SunIcon color={colors.white} />}
              />
            )}

            <ButtonsWrapper>
              {updateValues ? (
                <Button
                  style={{ borderRadius: 8 }}
                  fullWidth
                  variant='primary'
                  title={t('Edit')}
                  type='submit'
                  isLoading={isLoading}
                  leftIcon={<PencilIcon color={colors.white} />}
                />
              ) : (
                <>
                  <Button
                    style={{ borderRadius: 8 }}
                    fullWidth
                    variant='primary'
                    title={t('Add')}
                    type='submit'
                    isLoading={isLoading}
                    leftIcon={<PlusIcon color={colors.white} />}
                  />
                  <Button
                    style={{ borderRadius: 8 }}
                    fullWidth
                    variant='secondary'
                    title={t('Cancel')}
                    onClick={onClose}
                  />
                </>
              )}
            </ButtonsWrapper>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 34px;
`

const TimeInputsWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 18px;
`

const AnalyzedInfoView = ({ analyzeInfo }) => {
  const { t } = useTranslation()

  const explanation = (() => {
    switch (true) {
      case analyzeInfo >= 0.9:
        return t("have enough time to finish it, don't worry :)")
      case analyzeInfo >= 0.7:
        return t('probably finish it by your deadline, but be careful with the rest time')
      case analyzeInfo >= 0.5:
        return t('have a chance to finish it, but most likely you will need some support.')
      case analyzeInfo >= 0.25:
        return t(
          'not finish it by your deadline. Depends on the previous tasks and your productivity it would be difficult to complete.',
        )
      default:
        return t(
          'unfortunately not finish it. Would be better to move this task to someone else :(',
        )
    }
  })()

  return (
    <AnalyzedInfoWrapper>
      <Text type='p' lineHeight={22} fontSize={14}>
        {t('Related to your tasks of productivity coefficient you will ')}
        {explanation}
      </Text>
      <Text type='p' lineHeight={22} fontSize={18} style={{ marginTop: 12 }}>
        {t('Coefficient to finish task in deadline: ')}
      </Text>
      <Text type='h2' lineHeight={42} fontSize={54} style={{ marginTop: 4 }} color='linkHover'>
        {analyzeInfo}
      </Text>
    </AnalyzedInfoWrapper>
  )
}

const AnalyzedInfoWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
`
