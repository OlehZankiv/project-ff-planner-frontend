import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../../../../styles/breakpoints'
import { useState } from 'react'
import PeriodPaginator from './PeriodPaginator'
import PeriodTypeSelect from './PeriodTypeSelect'
import dayjs from 'dayjs'

const CalendarToolbar = ({ changeCalendarType, selectedDate, setSelectedDate, calendarType }) => {
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  const [year, setYear] = useState(currentYear)
  const [month, setMonth] = useState(currentMonth)

  const isPrevMonthDisabled = currentYear === year && currentMonth === month

  const isPrevDayDisabled = selectedDate - new Date() < 0

  console.log(selectedDate - new Date())

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11)
      setYear((prev) => prev - 1)
    } else {
      setMonth((prev) => prev - 1)
      const substractedMonth = dayjs(selectedDate).subtract(1, 'month')
      setSelectedDate(substractedMonth.$d)
    }
  }

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0)
      setYear((prev) => prev + 1)
    } else {
      setMonth((prev) => prev + 1)
      const addedMonth = dayjs(selectedDate).add(1, 'month')
      setSelectedDate(addedMonth.$d)
    }
  }

  const handleNextWeek = () => {
    const addedWeek = dayjs(selectedDate).add(7, 'day')
    setSelectedDate(addedWeek.$d)
    setMonth(selectedDate.getMonth())
  }

  const handlePrevWeek = () => {
    if (selectedDate - new Date() < 0) {
      return
    }
    const substractedWeek = dayjs(selectedDate).subtract(7, 'day')
    setSelectedDate(substractedWeek.$d)
    setMonth(selectedDate.getMonth())
  }

  return (
    <CalendarToolbarWrapper style={{ marginBottom: '24px' }}>
      <PeriodPaginator
        month={month}
        year={year}
        isPrevMonthDisabled={isPrevMonthDisabled}
        isPrevDayDisabled={isPrevDayDisabled}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
        handleNextWeek={handleNextWeek}
        handlePrevWeek={handlePrevWeek}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        calendarType={calendarType}
      >
        {' '}
      </PeriodPaginator>
      <PeriodTypeSelect
        changeCalendarType={changeCalendarType}
        calendarType={calendarType}
      ></PeriodTypeSelect>
    </CalendarToolbarWrapper>
  )
}

const CalendarToolbarWrapper = styled.div`
    display: block;
    flex-direction: row;
     ${getBreakpointsStyles({
       tablet: css`
         display: flex;
         justify-content: space-between;
       `,
       desktop: css`
         display: flex;
         justify-content: space-between;
       `,
     })}
 }
`

export default CalendarToolbar
