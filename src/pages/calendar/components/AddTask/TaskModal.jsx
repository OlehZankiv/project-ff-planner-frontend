import { useState } from 'react'
import { Modal, Button } from '../../../../components'
import styled, { css, useTheme } from 'styled-components'
import { PlusIcon } from '../../../../assets/icons'
import { useTranslation } from 'react-i18next'
import { LocalizationProvider, MobileTimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { RadioButton } from './RadioButton'
const priority = ['low', 'medium', 'high']

export const TaskModal = ({ date,visible,setVisible }) => {
  const { t } = useTranslation()
  const [title, setTitle] = useState('')
  const [startDate, setStartDate] = useState(dayjs(date).unix())
  const [endDate, setEndDate] = useState(dayjs(date).unix())
  const [selectedPriority, setSelectedPriority] = useState('low')
  const {colors} = useTheme()

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleStartDateChange = (event) => {
    setStartDate(event.$d.valueOf())
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.$d.valueOf())
  }

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value)
  }

  const resetForm = () => {
    setTitle('')
    setStartDate(dayjs(date).unix())
    setEndDate(dayjs(date).unix())
    setSelectedPriority('low')
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const formattedPriority = selectedPriority.charAt(0).toLowerCase() + selectedPriority.slice(1)
    const newTask = { title: title, start: startDate, end: endDate, priority: formattedPriority }
    console.log(newTask)
    resetForm()
    setVisible(false)
  }
  return (
    <>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Form
          autoComplete='off'
          onSubmit={(event) => {
            handleSubmit(event)
          }}
        >
          <FieldLabel htmlFor='title'>
          {t('Title')}
            <TimePickerInput
              type='text'
              name='title'
              id='title'
              maxLength='250'
              value={title}
              onChange={handleTitleChange}
              placeholder={t('Enter text')}
              required
            />
          </FieldLabel>

          <TimePickerWrap>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FieldLabel htmlFor='start'>
              {t('Start')}
                <MobileTimePicker
                  id='start'
                  ampm={false}
                  views={['hours', 'minutes']}
                  format='HH:mm'
                  value={dayjs(startDate)}
                  openTo='hours'
                  onAccept={(event) => {
                    handleStartDateChange(event)
                    handleEndDateChange(event)
                  }}
                  sx={TimePickerStyle}
                />
              </FieldLabel>
              <FieldLabel htmlFor='end'>
              {t('End')}
                <MobileTimePicker
                  id='end'
                  ampm={false}
                  views={['hours', 'minutes']}
                  format='HH:mm'
                  value={dayjs(endDate)}
                  openTo='hours'
                  minTime={dayjs(startDate).set('hour', dayjs(startDate).get('hour'))}
                  onAccept={(event) => {
                    handleEndDateChange(event)
                  }}
                  sx={TimePickerStyle}
                />
              </FieldLabel>
            </LocalizationProvider>
          </TimePickerWrap>
          <RadioButtonsWrap>
            {priority.map((item) => {
              return (
                <RadioButton
                  title={item}
                  checked={selectedPriority}
                  onChange={handlePriorityChange}
                  key={item}
                />
              )
            })}
          </RadioButtonsWrap>
          <ButtonWrap>
            <Button
              style={{
                padding: '15px 63px',
                background: colors.primary,
                color: colors.white,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                border: 'none',
                gap: '8px',
                width: '55%',
              }}
              variant='primary'
              title={t('Add')}
              type='submit'
              leftIcon={<PlusIcon color={colors.white} />}
            />
            <Button
              style={{
                padding: '15px 48px',
                background: colors.addTaskCancelButtonBackground,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                border: 'none',
                width: '44%',
              }}
              variant='secondaryButtonText'
              title={t('Cancel')}
              type='button'
              onClick={() => setVisible(false)}
            />
          </ButtonWrap>
        </Form>
      </Modal>
    </>
  )
}
const Form = styled.form`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.modalBackground};
    border-radius: 8px;
    width: 100%;
  `}
`

const FieldLabel = styled.label`
  ${({ theme: { colors } }) => css`
    margin-bottom: 18px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    font-size: 12px;
    line-height: 1.17;
    font-weight: 500;
    color: ${colors.text};
  `}
`
const TimePickerWrap = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 10px;
`
const RadioButtonsWrap = styled.div`
  display: flex;
  gap: 16px;
  justify-content: start;
  text-align: center;
  margin-bottom: 32px;
`
const TimePickerInput = styled.input`
  ${({ theme: { colors } }) => css`
    width: 100%;
    padding: 14px 18px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.29;
    border-radius: 8px;
    border: none;
    background-color: ${colors.modalsInputBackground};
    color: ${colors.text};
    ::placeholder {
      color: default;
      font-size: 12px;
    }
  `}
`
const ButtonWrap = styled.div`
  display: flex;
  gap: 14px;
`

const TimePickerStyle = () => {
  const {colors} = useTheme()
  return {
    width: '100%',
    boxSizing: 'border-box',
    borderColor: 'none',
    backgroundColor: colors.modalsInputBackground,
    '& .MuiInputBase-input': {
      padding: '14px 18px',
      border: 'none',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '1.29',
    },
    '& .MuiInputBase-root': {
      borderRadius: '8px',
      borderWidth: '0',
    },
  }
}
