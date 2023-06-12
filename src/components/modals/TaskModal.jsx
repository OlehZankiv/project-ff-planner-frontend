import { useEffect, useRef } from 'react'
import { Button, Input, Modal, TimePicker } from '../index'
import styled, { useTheme } from 'styled-components'
import { PencilIcon, PlusIcon } from '../../assets/icons'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import { RadioButtons } from '../fields/RadioButtons'
import { Form, Formik } from 'formik'
import { createTaskFormSchema } from '../../utils/schemas'
import { useCreateTask, useUpdateTask } from '../../hooks/query'

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

    formik.current?.resetForm({
      values: initialValues,
    })
  }

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

  useEffect(
    () => formik.current?.resetForm({ values: initialValues }),
    [JSON.stringify(initialValues)],
  )

  return (
    <Modal visible={visible} onClose={onClose}>
      <Formik
        innerRef={formik}
        initialValues={initialValues}
        validationSchema={createTaskFormSchema}
        onSubmit={updateValues ? updateTask : createTask}
      >
        {({ errors, touched, values }) => (
          <Form autoComplete='off'>
            <Input
              name='title'
              title={t('Title')}
              placeholder={t('Enter title')}
              errorMessage={t(errors.title)}
              successMessage={t('This is a CORRECT title')}
              isError={errors.title && touched.title}
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
                isError={errors.startAt && touched.startAt}
              />
              <TimePicker
                resetState={visible}
                name='endAt'
                title={t('End')}
                placeholder={t('Enter time')}
                errorMessage={t(errors.endAt)}
                successMessage={t('This is a CORRECT time')}
                isError={errors.endAt && touched.endAt}
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
